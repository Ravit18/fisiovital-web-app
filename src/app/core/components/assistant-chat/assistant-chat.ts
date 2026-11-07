import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { apiErrorMessage } from '../../models/api-error.model';
import { ChatLine } from '../../models/assistant-message.model';
import { AssistantService } from '../../services/assistant.service';
import { AuthService } from '../../services/auth.service';

/**
 * Floating AI assistant (US17 questions, US18 specialist, US19 booking, US20 rescheduling). Each layout mounts it
 * once, so the conversation survives page changes; closing the panel keeps it until "New conversation".
 */
@Component({
  selector: 'app-assistant-chat',
  imports: [FormsModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule, TranslatePipe],
  templateUrl: './assistant-chat.html',
  styleUrl: './assistant-chat.scss',
  host: { '(document:keydown.escape)': 'close()' },
})
export class AssistantChat {
  private readonly api = inject(AssistantService);
  private readonly translate = inject(TranslateService);
  private readonly auth = inject(AuthService);
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly input = viewChild<ElementRef<HTMLTextAreaElement>>('input');
  protected readonly isPatient = computed(() => this.auth.currentUser()?.role === 'PATIENT');

  protected readonly open = signal(false);
  /** A reply arrived while the panel was closed: the launcher shows a dot. */
  protected readonly unread = signal(false);
  protected draft = '';
  protected readonly lines = signal<ChatLine[]>([]);
  protected readonly sending = signal(false);
  private conversationId: number | null = null;

  /** Example prompts that cover each user story. */
  protected readonly suggestions = computed(() =>
    this.isPatient()
      ? ['assistant.suggestions.policy', 'assistant.suggestions.specialist', 'assistant.suggestions.book', 'assistant.suggestions.reschedule']
      : ['assistant.suggestions.policy', 'assistant.suggestions.physioReschedule', 'assistant.suggestions.physioReferral'],
  );
  protected readonly subtitle = computed(() => (this.isPatient() ? 'assistant.subtitle' : 'assistant.subtitlePhysio'));

  protected toggle(): void {
    if (this.open()) {
      this.close();
      return;
    }
    this.open.set(true);
    this.unread.set(false);
    this.scrollToEnd();
    queueMicrotask(() => this.input()?.nativeElement.focus());
  }

  protected close(): void {
    this.open.set(false);
  }

  protected useSuggestion(key: string): void {
    this.draft = this.translate.instant(key);
    this.send();
  }

  protected send(): void {
    const message = this.draft.trim();
    if (!message || this.sending()) return;
    this.draft = '';
    this.lines.update((lines) => [...lines, { author: 'user', text: message }]);
    this.sending.set(true);
    this.scrollToEnd();

    this.api.send(message, this.conversationId).subscribe({
      next: (reply) => {
        this.conversationId = reply.conversationId;
        this.addReply({ author: 'assistant', text: reply.reply, source: reply.source });
      },
      error: (error: HttpErrorResponse) => {
        // US17: when the AI is down the backend answers 503 with a translated message.
        const text = apiErrorMessage(error) ?? this.translate.instant('errors.network');
        this.addReply({ author: 'error', text });
      },
    });
  }

  protected newConversation(): void {
    this.conversationId = null;
    this.lines.set([]);
  }

  private addReply(line: ChatLine): void {
    this.lines.update((lines) => [...lines, line]);
    this.sending.set(false);
    if (!this.open()) this.unread.set(true);
    this.scrollToEnd();
  }

  private scrollToEnd(): void {
    queueMicrotask(() => {
      const log = this.log()?.nativeElement;
      if (log) log.scrollTop = log.scrollHeight;
    });
  }
}
