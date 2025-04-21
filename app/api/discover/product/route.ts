import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Use searchParams to retrieve query and limit parameters from the URL
    const query = req.nextUrl.searchParams.get("query") || "";
    const limit = parseInt(req.nextUrl.searchParams.get("limit") || "5");

    console.log("Search query:", query);

    if (query.length < 1) {
      return NextResponse.json({ statusCode: 500, datas: "" }, { status: 200 });
    }

    const datas = await prisma.product.findMany({
      where: {
        produkname: {
          contains: query,
          mode: "insensitive",
        },
      },
      take: limit,
    });

    return NextResponse.json(
      {
        success: true,
        statusCode: 200,
        message: "Getting Data Success",
        datas: datas,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching products:", error);
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        message: "Failed to fetch data",
      },
      { status: 500 }
    );
  }
}
