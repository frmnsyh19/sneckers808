import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

type OrderBy = { createdAt?: "asc" | "desc"; price?: "asc" | "desc" };

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category") || "";
  const sort = req.nextUrl.searchParams.get("sort") || "";

  const orderBy: OrderBy[] = [];

  const cateoryFilter =
    category && category !== "all"
      ? {
          category: {
            id: parseInt(category),
          },
        }
      : {};

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
    const datas = await prisma.product.findMany({
      where: cateoryFilter,
      select: {
        produkname: true,
        produkid: true,
        price: true,
        gallery: true,
        category: {
          select: {
            id: true,
            categoryname: true,
          },
        },
      },
      orderBy,
    });

    return NextResponse.json({ datas: datas, status: 200 }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
