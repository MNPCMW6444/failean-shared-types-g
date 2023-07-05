import { Document } from "mongoose";

export namespace OCModels {
  export interface ExpressRequest extends Document {
    stringifiedReq: string;
    stringifiedRes: string;
  }

  export namespace Auth {
    export interface SigninReq extends Document {
      successfull: boolean;
      userEmail: string;
      time: Date;
      reason?: string;
    }
  }
  export namespace Data {
    export namespace Prompts {
      export interface OpenAICall extends Document {
        stringifiedParams: string;
        stringifiedCompletion: string;
      }

      export interface InvalidPrompt extends Document {
        callId: string;
        prompt: string;
        result: string;
        promptName: string;
        ideaID: string;
      }

      export interface PromptPrice extends Document {
        openAICallId: string;
        promptName: string;
        forAVGPriceInOpenAITokens: number;
      }
    }
  }
}
