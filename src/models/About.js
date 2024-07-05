import mongoose, { Schema, models } from "mongoose";

const aboutSchema = new Schema({
  title: {
    type: String,
  },
  shortDesc: {
    type: String,
  },
  role: {
    type: String,
  },
  description: [
    {
      type: String,
    },
  ],
  resume: {
    type: String,
  },
  image: {
    type: String,
  },
  totalExperience: {
    type: String,
  },
  totalProjects: {
    type: String,
  },
});

const About = models.About || mongoose.model("About", aboutSchema);
export default About;
