export interface Turn {
  role: 'user' | 'assistant' | string;
  content: string;
}
