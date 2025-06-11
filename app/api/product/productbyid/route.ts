import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const productid = req.nextUrl.searchParams.get("productid") || "";

    const datas = await prisma.product.findFirst({
      where: {
        produkid: productid,
      },
      include: {
        category: true,
        size: true,
      },
    });
    return NextResponse.json(
      {
        statusCode: 200,
        datas,
        message: "success getting data",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
}
