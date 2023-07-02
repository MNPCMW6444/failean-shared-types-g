import { Document } from "mongoose";

export namespace OCModels {
  export interface RestRequest extends Document {
    stringified: string;
  }

  export interface SigninReq extends Document {
    stringifiedReq: string;
    successfull: boolean;
    userEmail: string;
    time: Date;
    reason?: string;
  }
}
