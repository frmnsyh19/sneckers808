import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isLoggedin = !!token;
  const role = token?.role; // Pastikan role sudah dikonfigurasi di JWT NextAuth

  // Rute yang hanya bisa diakses oleh admin
  const adminRoutes = [
    "/sn-admin/brand",
    "/sn-admin/category",
    "/sn-admin/product/create",
    "/sn-admin/dashboard",
  ];

  // Rute yang hanya bisa diakses oleh user
  const userRoutes = ["/", "/cart", "/checkout", "/profile"];

  // Rute yang memerlukan login
  const protectedRoutes = ["/checkout", "/sn-admin/brand"];

  if (
    !isLoggedin ||
    (adminRoutes.includes(nextUrl.pathname) && role !== "admin")
  ) {
    return NextResponse.redirect(new URL("/unauthorized", nextUrl));
  }
  if (
    isLoggedin &&
    adminRoutes.includes(nextUrl.pathname) &&
    role !== "admin"
  ) {
    // Proteksi Admin
    return NextResponse.redirect(new URL("/unauthorized", nextUrl));
  }

  // Proteksi User
  if (isLoggedin && userRoutes.includes(nextUrl.pathname) && role !== "user") {
    return NextResponse.redirect(new URL("/unauthorized", nextUrl));
  }

  // Proteksi halaman yang memerlukan login
  if (!isLoggedin && protectedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
}

// Konfigurasi rute yang akan menggunakan middleware ini
export const config = {
  matcher: [
    "/sn-admin/:path*",
    "/dashboard",
    "/checkout",
    "/cart",
    "/profile",
    "/login",
  ],
};
