import mongoose, { Schema, models } from "mongoose";

const experienceSchema = new Schema({
  role: {
    type: String,
  },
  company: {
    type: String,
  },
  duration: {
    type: String,
  },
  image: {
    type: String,
  },
  description: [
    {
      type: String,
    },
  ],
});

const Experience =
  models.Experience || mongoose.model("Experience", experienceSchema);
export default Experience;
