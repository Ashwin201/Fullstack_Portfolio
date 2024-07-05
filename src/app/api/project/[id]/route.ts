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
export async function GET(
  req: NextRequest,
  { params }: { params: any }
): Promise<NextResponse> {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "No detail found based on this id" },
        { status: 400 }
      );
    }
    await connectToDb();
    const data = await Project.findById({ _id: id });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

// Put request for Project
export async function PUT(
  req: NextRequest,
  { params }: { params: any }
): Promise<NextResponse> {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "No detail found based on this id" },
        { status: 400 }
      );
    }
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
    const data = await Project.findByIdAndUpdate(
      { _id: id },
      {
        projectNumber,
        title,
        description,
        category,
        image,
        technology,
        feature,
        github,
        live,
      }
    );
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update content" },
      { status: 400 }
    );
  }
}

// Delete request for Project
export async function DELETE(
  req: NextRequest,
  { params }: { params: any }
): Promise<NextResponse> {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: "No detail found based on this id" },
        { status: 400 }
      );
    }
    await connectToDb();
    await Project.findByIdAndDelete({ _id: id });
    return NextResponse.json(
      { message: "Content deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete content" },
      { status: 400 }
    );
  }
}
