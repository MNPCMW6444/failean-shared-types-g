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

export type PromptGraph = {
  name: PromptName;
  deps: PromptName[];
  level: number;
}[];

export type OpenAIPromise = Promise<
  AxiosResponse<CreateChatCompletionResponse, any>
>;

export interface GroupedPrompt {
  groupName: string;
  prompt: ChatCompletion;
  level: number;
}

export type RoleMap = Record<string, string>;

export * from "./api/index";
export * from "./white-models/index";
