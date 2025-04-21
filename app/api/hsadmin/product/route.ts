import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const datas = await req.json();

    await prisma.product.create({
      data: {
        produkname: datas.produkname as string,
        price: parseFloat(datas.price as string),
        deskripsi: datas.deskripsi as string,
        gallery: datas.gallery,
        brand_id: 1,
        category_id: datas.categoryid,
      },
    });

    return NextResponse.json(
      {
        message: "success",
        statusCode: 200,
        datas,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
