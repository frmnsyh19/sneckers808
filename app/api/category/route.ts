import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const responseDatas = await prisma.category.findMany();

    return NextResponse.json(
      {
        statusCode: 200,
        success: true,
        datas: responseDatas,
        message: "Getting Data Succsess",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
