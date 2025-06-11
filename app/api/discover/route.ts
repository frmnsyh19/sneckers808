import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
type OrderBy = { createdAt?: "asc" | "desc"; price?: "asc" | "desc" };

export async function GET(req: NextRequest) {
  const sort = req.nextUrl.searchParams.get("sort");
  const query = req.nextUrl.searchParams.get("query");
  const category = req.nextUrl.searchParams.get("category") || "";

  const orderBy: OrderBy[] = [];

  if (!sort) {
    orderBy.push({ createdAt: "asc" });
  }
  if (sort === "new") {
    orderBy.push({ createdAt: "desc" });
  }
  if (sort === "oldest") {
    orderBy.push({ createdAt: "asc" });
  }
  if (sort === "high") {
    orderBy.push({ price: "desc" });
  }
  if (sort === "low") {
    orderBy.push({ price: "asc" });
  }

  try {
    if (category) {
      const categoryProduct = await prisma.product.findMany({
        where: {
          category: {
            categoryname: (category as string) || "",
          },
        },
        include: {
          category: true,
        },
        orderBy,
      });
      return NextResponse.json({ datas: categoryProduct }, { status: 200 });
    }

    const data = await prisma.product.findMany({
      where: {
        produkname: {
          contains: (query as string) || "",
          mode: "insensitive",
        },
      },
      include: {
        category: true,
      },
      orderBy,
    });

    return NextResponse.json({
      success: true,
      statusCode: 200,
      message: "Data fetched successfully",
      datas: data,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
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
