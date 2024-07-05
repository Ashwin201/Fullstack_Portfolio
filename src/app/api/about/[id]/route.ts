import About from "@/models/About";
import { connectToDb } from "@/mongodb/database";
import { NextResponse, NextRequest } from "next/server";

// Type definitions for the parameters
interface Params {
  id: string;
}

// Get request for about
export async function GET(
  req: NextRequest,
  { params }: { params: Params }
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
    const data = await About.findById({ _id: id });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update content" },
      { status: 400 }
    );
  }
}

// Put request for About
export async function PUT(
  req: NextRequest,
  { params }: { params: Params }
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
    const {
      title,
      shortDesc,
      role,
      description,
      resume,
      image,
      totalProjects,
      totalExperience,
    } = await req.json();
    const data = await About.findByIdAndUpdate(
      { _id: id },
      {
        title,
        shortDesc,
        role,
        description,
        resume,
        image,
        totalProjects,
        totalExperience,
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

// Delete request for About
export async function DELETE(
  req: NextRequest,
  { params }: { params: Params }
): Promise<NextResponse> {
  try {
    const id = params.id;
    await connectToDb();
    const data = await About.findByIdAndDelete({ _id: id });
    return NextResponse.json(
      { message: "Work deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update content" },
      { status: 400 }
    );
  }
}
