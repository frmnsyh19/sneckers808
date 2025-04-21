import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await auth();

    const userData = await prisma.profile.findFirst({
      where: {
        user_id: user?.user?.id as string,
      },
    });

    if (!userData) {
      return NextResponse.json(
        { message: "datas no avalaible" },
        { status: 500 }
      );
    }

    return NextResponse.json({ datas: userData }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
