import { Document } from "mongoose";

export namespace OCModels {
  export interface RestRequest extends Document {
    stringified: string;
  }

  export namespace Auth {
    export interface SigninReq extends Document {
      stringifiedReq: string;
      successfull: boolean;
      userEmail: string;
      time: Date;
      reason?: string;
    }
  }
  export namespace Data {
    export namespace Prompts {
      export interface InvalidPrompt extends Document {
        stringifiedReq: string;
        stringifiedCompletion: string;
        prompt: string;
        result: string;
        promptName: string;
        ideaId: string;
      }

      export interface OpenAICall extends Document {
        stringifiedReq: string;
        //...
      }

      export interface PromptPrice extends Document {
        openAICallId: string;
        promptName: string;
        forAVGPriceInOpenAITokens: number;
      }
    }
  }
}
