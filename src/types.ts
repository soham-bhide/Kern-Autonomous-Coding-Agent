

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
  content: TextBlock[]; 
  usage: Usage;
  stopReason: StopReason;
};

export type Message = UserMessage | AssistantMessage;