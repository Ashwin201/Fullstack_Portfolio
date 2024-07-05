import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

//Post request for Sending email
export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465, // Use 465 for secure connection (SSL/TLS)
      secure: true, // Set to true if using SSL/TLS

      auth: {
        user: process.env.EMAIL_USER, // Add your SMTP username
        pass: process.env.EMAIL_PASSWORD, // Add your SMTP password
      },
    });

    const info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${email} via portfolio`,
      html: `
        <div>
        <p className=" flex  items-center gap-2 text-base">
        <span className="  text-base sm:text-base">
          Name :
        </span>
        ${name}
      </p>
        <p className=" flex  items-center gap-2 text-base">
        <span className="  text-base sm:text-base">
          Email :
        </span>
        ${email}
      </p>
        <p className=" flex  items-center gap-2 text-base">
        <span className="  text-base sm:text-base">
          Subject :
        </span>
        ${subject}
      </p>
        <p className=" flex  items-center gap-2 text-base">
        <span className="  text-base sm:text-base">
          Message :
        </span>
        ${message}
      </p>
      </div>
        `,
    });

    // console.log("Email sent:", info);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create content" },
      { status: 400 }
    );
  }
}
