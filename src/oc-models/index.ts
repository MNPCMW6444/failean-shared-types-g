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
    export interface InvalidPrompt extends Document {
      stringifiedReq: string;
      stringifiedCompletion: string;
      prompt: string;
      result: string;
      promptName: string;
      ideaId: string;
    }
  }
}
