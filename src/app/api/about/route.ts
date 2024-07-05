import About from "@/models/About";
import { connectToDb } from "@/mongodb/database";
import { NextResponse, NextRequest } from "next/server";

// Type definitions for the About model
interface About {
  title: string;
  shortDesc: string;
  role: string;
  description: string[];
  resume: string;
  image: string;
  totalProjects: number;
  totalExperience: number;
}

// Get request for about
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDb();
    const data = await About.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

// Post request for about
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const {
      title,
      shortDesc,
      role,
      description,
      resume,
      image,
      totalProjects,
      totalExperience,
    }: About = await req.json();
    await connectToDb();
    const data = await About.create({
      title,
      shortDesc,
      role,
      description,
      resume,
      image,
      totalProjects,
      totalExperience,
    });
    console.log(data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to create content" },
      { status: 400 }
    );
  }
}
