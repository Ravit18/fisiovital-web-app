import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../iam/services/auth.service';
import { apiErrorMessage } from '../../../shared/model/api-error';
import { ChatLine } from '../../model/assistant-message.entity';
import { AssistantApi } from '../../services/assistant.api';

/**
 * US17 questions, US18 specialist recommendation, US19 booking and US20 rescheduling through the AI
 * assistant. Bookings it makes show up in "My appointments".
 */
@Component({
  selector: 'app-assistant-chat',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    TranslatePipe,
  ],
  templateUrl: './assistant-chat.html',
  styleUrl: './assistant-chat.scss',
})
export class AssistantChat {
  private readonly api = inject(AssistantApi);
  private readonly translate = inject(TranslateService);
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly auth = inject(AuthService);
  protected readonly isPatient = computed(() => this.auth.currentUser()?.role === 'PATIENT');

  protected draft = '';
  protected readonly lines = signal<ChatLine[]>([]);
  protected readonly sending = signal(false);
  private conversationId: number | null = null;

  /** Example prompts that cover each user story. */
  protected readonly suggestions = computed(() =>
    this.isPatient()
      ? ['assistant.suggestions.policy', 'assistant.suggestions.specialist', 'assistant.suggestions.book', 'assistant.suggestions.reschedule']
      : ['assistant.suggestions.policy', 'assistant.suggestions.specialist'],
  );

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
        this.lines.update((lines) => [...lines, { author: 'assistant', text: reply.reply, source: reply.source }]);
        this.sending.set(false);
        this.scrollToEnd();
      },
      error: (error: HttpErrorResponse) => {
        // US17: when the AI is down the backend answers 503 with a translated message.
        const text = apiErrorMessage(error) ?? this.translate.instant('errors.network');
        this.lines.update((lines) => [...lines, { author: 'error', text }]);
        this.sending.set(false);
        this.scrollToEnd();
      },
    });
  }

  protected newConversation(): void {
    this.conversationId = null;
    this.lines.set([]);
  }

  private scrollToEnd(): void {
    queueMicrotask(() => {
      const log = this.log()?.nativeElement;
      if (log) log.scrollTop = log.scrollHeight;
    });
  }
}
