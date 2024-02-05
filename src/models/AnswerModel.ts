// src/models/AnswerModel.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface Answer extends Document {
  cardId: string;
  button1: number;
  button2: number;
  button3: number;
  button4: number;
}

const AnswerSchema = new Schema({
  cardId: {
    type: String,
    required: true,
    unique: true,
  },
  button1: {
    type: Number,
    default: 0,
  },
  button2: {
    type: Number,
    default: 0,
  },
  button3: {
    type: Number,
    default: 0,
  },
  button4: {
    type: Number,
    default: 0,
  },
});

const AnswerModel = mongoose.models.Answer || mongoose.model<Answer>('Answer', AnswerSchema);

export default AnswerModel;
