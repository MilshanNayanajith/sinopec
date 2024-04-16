import mongoose, { Schema, Document } from "mongoose";

interface PumpModel extends Document {
  name: string;
  meter: number;
  fuel: string;
}

const pumpSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    meter: { type: Number, required: true },
    fuel: { type: String, required: true }
  },
  { timestamps: true }
);

const Pump = mongoose.model<PumpModel>('Pump', pumpSchema);

export default Pump;
