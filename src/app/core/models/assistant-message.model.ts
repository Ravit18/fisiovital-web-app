/** AI = answered by Gemini; SAFETY = fixed answer from the guardrails (emergency, medication, "it hurts"). */
export type ReplySource = 'AI' | 'SAFETY';

/** AssistantReplyResponseDTO in the backend (US17-US20). */
export interface AssistantReply {
  conversationId: number;
  reply: string;
  source: ReplySource;
  /** Quick replies shown as buttons (time slots, physiotherapists, confirm); may be empty. */
  choices?: string[];
  /** Screen the voice assistant opens (AgentAction in the backend); null when nothing changes. */
  action?: AgentAction | null;
}

/** AgentAction in the backend: a page of the web app, with the physiotherapist, day or specialty to show. */
export interface AgentAction {
  page: string;
  physiotherapistId?: number | null;
  date?: string | null;
  specialty?: string | null;
}

/** AssistantTranscriptionResponseDTO in the backend. */
export interface AssistantTranscriptionResponse {
  transcript: string;
}

/** ConversationSummary in the backend: one chat of the user's history. */
export interface ConversationSummary {
  id: number;
  title: string;
  startedAt: string;
  lastActivityAt: string;
}

/** ConversationMessage in the backend: a saved line of a chat. */
export interface ConversationMessage {
  id: number;
  sender: 'USER' | 'ASSISTANT';
  content: string;
  choices?: string[];
  createdAt: string;
}

/** One line of the chat as shown in the UI. */
export interface ChatLine {
  author: 'user' | 'assistant' | 'error';
  text: string;
  source?: ReplySource;
  choices?: string[];
}
