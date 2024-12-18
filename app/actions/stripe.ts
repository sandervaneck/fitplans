"use server";

import type { Stripe } from "stripe";
import { headers } from "next/headers";
import { stripe } from "../lib/stripe";
import { formatAmountForStripe } from "../utils/stripe-helpers";

export async function createCheckoutSession(
  data: FormData,
  amount: number,
  plantype: string,
  clientSessionId: string
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get(
    "uiMode"
  ) as Stripe.Checkout.SessionCreateParams.UiMode;
  const origin: string = (await headers()).get("origin") as string;

  // Create an array to hold line items
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  // Add each item from the order to the line items array
  lineItems.push({
    quantity: 1,
    price_data: {
      currency: "eur",
      product_data: {
        name: "meal order",
      },
      unit_amount: formatAmountForStripe(amount, "eur"),
    },
  });

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      payment_method_types: ["card", "ideal"],
      line_items: lineItems, // Use the lineItems array

      ...(ui_mode === "hosted" && {
        success_url:
          plantype === "mealplan"
            ? `${origin}/mealplan/${clientSessionId}`
            : `${origin}/trainingplan/${clientSessionId}`,
        cancel_url: `${origin}/`,
      }),
      ...(ui_mode === "embedded" && {
        return_url:
          plantype === "mealplan"
            ? `${origin}/mealplan/${clientSessionId}`
            : `${origin}/trainingplan/${clientSessionId}`,
      }),
      ui_mode,
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get("customDonation") as string),
        "eur"
      ),
      automatic_payment_methods: { enabled: true },
      currency: "eur",
    });

  return { client_secret: paymentIntent.client_secret as string };
}
