import { Document } from "mongoose";

export namespace OCModels {
  export interface WhiteToken extends Document {
    stringified: string;
  }
}
