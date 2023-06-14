export interface AppName {
  low: string;
  up: string;
  special: string;
  allUp: string;
  //more...
}

export type PromptPartType = "static" | "variable";

export interface PromptPart {
  type: PromptPartType;
  content: string;
}

export type Prompt = PromptPart[];
export type PromptMap = Record<string, Prompt>;

export type PromptName = keyof PromptMap;

export type PromptGraph = { name: PromptName; level: number }[];

export interface WhiteRequestForAccount {
  email: string;
  key: string;
  idea?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WhiteRequestForPassChange {
  email: string;
  key: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WhiteUser {
  email: string;
  passwordHash: string;
  name: string;
  subscription: "free" | "premium" | "tokens";
  createdAt: Date;
  updatedAt: Date;
}

export interface OpenAiPromise {
  stringifiedOpenAiPromise: string;
}
