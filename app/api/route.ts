import { NextResponse } from "next/server";

type Lead = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Lead;

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("New enterprise lead:", {
      ...body,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! Our team will contact you shortly.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request.",
      },
      {
        status: 400,
      }
    );
  }
}

