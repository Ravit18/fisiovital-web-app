/** AI = answered by Gemini; SAFETY = fixed answer from the guardrails (emergency, medication, "it hurts"). */
export type ReplySource = 'AI' | 'SAFETY';

export interface AssistantReply {
  conversationId: number;
  reply: string;
  source: ReplySource;
}

/** One line of the chat as shown in the UI. */
export interface ChatLine {
  author: 'user' | 'assistant' | 'error';
  text: string;
  source?: ReplySource;
}
