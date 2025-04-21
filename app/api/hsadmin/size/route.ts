import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { productid, size, stok } = await req.json();

    const Field = await prisma.size.findFirst({
      where: {
        productid: productid,
        size: size,
      },
    });

    if (Field) {
      return NextResponse.json({ message: "okenih" }, { status: 500 });
    }

    await prisma.size.create({
      data: {
        productid: parseInt(productid),
        size: size as string,
        stok: parseInt(stok),
      },
    });

    return NextResponse.json({ message: "okenih" }, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
