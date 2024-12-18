import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_API_KEY as string,
  {
    appInfo: {
      name: "nextjs-with-stripe-typescript-demo",
      url: "https://nextjs-with-stripe-typescript-demo.vercel.app",
    },
  }
);
