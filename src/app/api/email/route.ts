import Email from "@/models/Emails";
import { connectToDb } from "@/mongodb/database";
import { NextResponse, NextRequest } from "next/server";

// Type definitions for the Email model
interface Email {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Get request for expEmail
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDb();
    const data = await Email.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to receive content." },
      { status: 400 }
    );
  }
}

// Post request for Email
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, subject, message }: Email = await req.json();
    await connectToDb();
    const data = await Email.create({
      name,
      email,
      subject,
      message,
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
