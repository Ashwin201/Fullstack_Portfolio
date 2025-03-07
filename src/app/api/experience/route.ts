import { NextResponse } from "next/server";
import Experience from "@/models/Experience";
import { connectToDb } from "@/mongodb/database";

// Define the types for Experience attributes
interface ExperienceAttributes {
  role: string;
  company: string;
  duration: string;
  image: string;
  description: any;
}

// Get request for experience
export async function GET(req: Request): Promise<NextResponse> {
  try {
    await connectToDb();
    const data = await Experience.find().sort({ _id: -1 });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

// Post request for Experience
export async function POST(req: Request): Promise<NextResponse> {
  try {
    const {
      role,
      company,
      duration,
      image,
      description,
    }: ExperienceAttributes = await req.json();
    await connectToDb();
    const data = await Experience.create({
      role,
      company,
      duration,
      image,
      description,
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
