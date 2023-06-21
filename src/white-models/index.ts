import mongoose, { Document } from "mongoose";

export namespace WhiteModels {
  export namespace Accounts {
    export interface WhiteToken extends Document {
      owner: mongoose.Types.ObjectId;
      transaction: number;
      description: string;
      createdAt: Date;
      updatedAt: Date;
    }
  }

  export namespace Auth {
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
  }

  export namespace Data {
    export namespace Ideas {
      export interface WhiteIdea extends Document {
        owner: mongoose.Types.ObjectId;
        idea: string;
        archived: boolean;
        createdAt: Date;
        updatedAt: Date;
      }
    }

    export namespace Prompts {
      export interface WhitePromptResult extends Document {
        owner: mongoose.Types.ObjectId;
        ideaId: string;
        promptName: string;
        reason: "run" | "feedback" | "save";
        data: string;
        createdAt: Date;
        updatedAt: Date;
      }

      export interface WhiteTask extends Document {
        owner: mongoose.Types.ObjectId;
        ideaId: string;
        promptName: string;
        taskId: number;
        createdAt: Date;
        updatedAt: Date;
      }
    }
  }
}
