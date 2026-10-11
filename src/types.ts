

export type Usage = {
  input: number;
  output: number;
};

export type StopReason = "stop" | "length";

export type TextBlock = {
  type: "text";
  text: string;
};

export type UserMessage = {
  role: "user";
  content: string;
};

export type AssistantMessage = {
  role: "assistant";
  content: TextBlock[]; // FIX: a LIST of blocks
  usage: Usage;
  stopReason: StopReason;
};

export type Message = UserMessage | AssistantMessage;