import { Document } from "mongoose";
import { AxiosResponse } from "axios";
import { CreateChatCompletionResponse } from "openai";

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

export interface ChatCompletion {
  role: keyof roleMap;
  prompt: PromptPart[];
}
export type PromptMap = Record<string, ChatCompletion>;

export type PromptName = keyof PromptMap;

export type PromptGraph = { name: PromptName; level: number }[];

export interface WhiteRequestForAccount extends Document {
  email: string;
  key: string;
  idea?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WhiteRequestForPassChange extends Document {
  email: string;
  key: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WhiteUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  subscription: "free" | "premium" | "tokens";
  createdAt: Date;
  updatedAt: Date;
}

export type OpenAIPromise = Promise<
  AxiosResponse<CreateChatCompletionResponse, any>
>;

export interface WhiteOpenAIPromise extends Document {
  stringifiedOpenAIPromise: string;
}

export interface GroupedPrompt {
  groupName: string;
  prompt: ChatCompletion;
  level: number;
}

export type RoleMap = Record<string, string>;
