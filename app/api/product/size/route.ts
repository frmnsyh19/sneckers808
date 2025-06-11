import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const datas = await prisma.size.findMany();

    return NextResponse.json(
      { datas, status: 200, message: "success" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
