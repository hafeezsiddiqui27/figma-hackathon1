// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Correct API version and error handling
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia", // Ensure your Stripe library supports this version
});

export async function POST(request: Request) {
  const { lineItems } = await request.json();

  try {
    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
        //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cart',
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
