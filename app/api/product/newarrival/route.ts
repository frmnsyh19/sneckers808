import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const datas = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(
      { datas: datas, status: 200, message: "success" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
