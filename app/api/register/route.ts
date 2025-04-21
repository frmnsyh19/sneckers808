import { prisma } from "@/prisma";
import { hashSync } from "bcrypt-ts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    const CheckedEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (CheckedEmail) {
      return NextResponse.json(
        {
          statusCode: 500,
          message: "Email already exists",
        },
        { status: 500 }
      );
    }

    const newHashPassword = hashSync(password, 10);

    await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: newHashPassword,
      },
    });

    return NextResponse.json(
      { statusCode: 200, message: "Success" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
