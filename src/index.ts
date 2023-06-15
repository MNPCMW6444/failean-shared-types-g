import mongoose, { Document } from "mongoose";
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
  role: keyof RoleMap;
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
  owner: mongoose.Types.ObjectId;
  stringifiedOpenAIPromise: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GroupedPrompt {
  groupName: string;
  prompt: ChatCompletion;
  level: number;
}

export type RoleMap = Record<string, string>;

export interface WhiteToken extends Document {
  owner: mongoose.Types.ObjectId;
  transaction: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WhitePromptResultModal {
  owner: mongoose.Types.ObjectId;
  ideaId: string;
  promptName: string;
  data: string;
  createdAt: Date;
  updatedAt: Date;
}
