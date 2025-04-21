import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get("query") || "";

    const datas = await prisma.category.findMany({
      where: {
        categoryname: {
          contains: query,
          mode: "insensitive",
        },
      },
    });

    return NextResponse.json(
      { datas, message: "Getting data success" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { categoryname } = await req.json();

    const existfield = await prisma.category.findFirst({
      where: {
        categoryname: categoryname,
      },
    });

    if (existfield) {
      return NextResponse.json({ message: "data exist" }, { status: 500 });
    }

    await prisma.category.create({
      data: {
        categoryname: categoryname,
      },
    });

    return NextResponse.json(
      {
        statusCode: 200,
        message: "Success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
