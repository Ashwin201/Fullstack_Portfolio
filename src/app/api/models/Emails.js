import mongoose, { Schema, models } from "mongoose";

const emailSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },

  message: {
    type: String,
  },
});

const Email = models.Email || mongoose.model("Email", emailSchema);
export default Email;
