import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.product.findMany({
      include: {
        category: true,
      },
    });

    return NextResponse.json({ statusCode: 200, datas: res }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
