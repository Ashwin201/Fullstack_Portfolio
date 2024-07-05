import mongoose, { Schema, models } from "mongoose";

const projectSchema = new Schema({
  projectNumber: {
    type: Number,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: [
    {
      type: String,
    },
  ],
  technology: [
    {
      type: String,
    },
  ],
  feature: [
    {
      type: String,
    },
  ],
  github: {
    type: String,
  },
  live: {
    type: String,
  },
});

const Project = models.Project || mongoose.model("Project", projectSchema);
export default Project;
