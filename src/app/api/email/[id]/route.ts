import Email from "@/models/Emails";
import { connectToDb } from "@/mongodb/database";
import { NextResponse, NextRequest } from "next/server";

// Type definitions for the parameters
interface Params {
  id: string;
}

// Delete request for Project
export async function DELETE(
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
    await Email.findByIdAndDelete({ _id: id });
    return NextResponse.json(
      { message: "Email deleted successfully" },
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
