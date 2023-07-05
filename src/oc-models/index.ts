import { Document } from "mongoose";

export namespace OCModels {
  export interface ExpressRequest extends Document {
    uuid: string;
    stringifiedReq: string;
  }

  export interface ExpressResponse extends Document {
    uuid: string;
    stringifiedRes: string;
  }

  export namespace Auth {
    export interface SigninReq extends Document {
      reqUUID: string;
      successfull: boolean;
      userEmail: string;
      time: Date;
      reason?: string;
    }
  }

  export namespace Data {
    export namespace Prompts {
      export interface OpenAICall extends Document {
        reqUUID: string;
        stringifiedParams: string;
        stringifiedCompletion: string;
      }

      export interface InvalidPrompt extends Document {
        openAICallReqUUID: string;
        prompt: string;
        result: string;
        promptName: string;
        ideaID: string;
      }

      export interface PromptPrice extends Document {
        openAICallReqUUID: string;
        promptName: string;
        priceInOpenAITokensForAVG: number;
      }
    }
  }
}
