import Project from "@/models/Projects";
import { connectToDb } from "@/mongodb/database";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Define the types for Project attributes
interface ProjectAttributes {
  projectNumber: number;
  title: string;
  description: string;
  category: string;
  image: any;
  technology: any;
  feature: any;
  github: string;
  live: string;
}

// Get request for Project
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDb();
    const data = await Project.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

// Post request for Project
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const {
      projectNumber,
      title,
      description,
      category,
      image,
      technology,
      feature,
      github,
      live,
    }: ProjectAttributes = await req.json();
    await connectToDb();
    const data = await Project.create({
      projectNumber,
      title,
      description,
      category,
      image,
      technology,
      feature,
      github,
      live,
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create content" },
      { status: 400 }
    );
  }
}
