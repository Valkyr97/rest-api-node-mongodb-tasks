import { Schema, model } from "mongoose";
import paginate from 'mongoose-paginate-v2'

const taskSChema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

taskSChema.plugin(paginate)
export default model('Task', taskSChema)