import { sessionOptions } from "@/libs/Session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
  brand: string;
  size: string;
  total: number;
}

type IronSessionData = {
  cart: CartItem[];
};

export async function POST(req: NextRequest) {
  try {
    // Initialize the session

    const session = await getIronSession<IronSessionData>(
      await cookies(),
      sessionOptions
    );

    // Parse the incoming data
    const { id, name, price, qty, image, brand, size, newcart } =
      await req.json();

    // Initialize cart if it does not exist
    if (!session.cart || !Array.isArray(session.cart)) {
      session.cart = [];
    }

    // Update Cart
    if (newcart && Array.isArray(newcart)) {
      session.cart = newcart;
      await session.save();
      return NextResponse.json(
        { message: "Cart updated successfully with new data." },
        { status: 200 }
      );
    }

    // // Validate input data
    if (!id || !name || !price || qty <= 0) {
      return NextResponse.json(
        { error: "Invalid item data provided." },
        { status: 400 }
      );
    }

    // // Check if the item already exists in the cart
    const existingItem = session.cart.find((item) => item.id === id);

    if (existingItem) {
      // If item exists, update its quantity
      existingItem.qty += qty;
      existingItem.total = existingItem.price * existingItem.qty;
    } else {
      // If item does not exist, add it to the cart
      session.cart.push({
        id,
        name,
        price,
        qty,
        image,
        brand,
        size,
        total: price * qty,
      });
    }

    // // Save the updated session
    await session.save();

    return NextResponse.json(
      {
        cart: session.cart,
        message: "Product successfully added.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json(
      { error: "Failed to update cart." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = getIronSession<IronSessionData>(
      await cookies(),
      sessionOptions
    );

    return NextResponse.json({ datas: (await session).cart }, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getIronSession<IronSessionData>(
    await cookies(),
    sessionOptions
  );

  const id = req.nextUrl.searchParams.get("id");

  if (id) {
    session.cart = session.cart?.filter((items) => items.id !== parseInt(id));

    await session.save();

    return NextResponse.json(
      {
        message: "delete product in cart success🚀",
      },
      { status: 200 }
    );
  }

  // apus semua session yang ada di cart
  (await session).destroy();
  return NextResponse.json(
    { message: "session success delete" },
    { status: 200 }
  );
}
