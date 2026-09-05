export interface ChatMessage {
  id: string;
  role:
    | "user"
    | "assistant";
  content: string;
  createdAt?: Date;
}

export interface SuggestedQuestion {
  id: string;
  label: string;
  question: string;
}