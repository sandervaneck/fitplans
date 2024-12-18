"use client";

import type Stripe from "stripe";

import React, { JSX, useState } from "react";
import getStripe from "@/app/utils/get-stripejs";
import { formatAmountForDisplay } from "@/app/utils/stripe-helpers";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { Box, Button, Typography } from "@mui/material";
import { createCheckoutSession } from "@/app/actions/stripe";
import { MealsPerWeek, TrainingsPerWeekType } from "@/app/types/types";

interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
  plan: MealsPerWeek[] | TrainingsPerWeekType[];
  plantype: string;
  clientSessionId: string;
}

const setMealPlanAnswer = (plan: MealsPerWeek[] | TrainingsPerWeekType[]) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("mealPlanAnswer"))
      localStorage.removeItem("mealPlanAnswer");
    localStorage.setItem("mealPlanAnswer", JSON.stringify(plan));
  } else {
    console.warn("localStorage is not available on the server side");
  }
};
const setTrainingPlanAnswer = (
  plan: MealsPerWeek[] | TrainingsPerWeekType[]
) => {
  if (typeof window !== "undefined") {
    try {
      if (localStorage.getItem("trainingPlanAnswer"))
        localStorage.removeItem("trainingPlanAnswer");
      // Serialize and store in localStorage
      const serializedPlan = JSON.stringify(plan);
      localStorage.setItem("trainingPlanAnswer", serializedPlan);
    } catch (error) {
      console.error("Failed to store training plan in localStorage:", error);
    }
  } else {
    console.warn("localStorage is not available on the server side");
  }
};
export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
  const [loading] = useState<boolean>(false);

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const amount = 7.5;
  const formAction = async (data: FormData): Promise<void> => {
    const uiMode = data.get(
      "uiMode"
    ) as Stripe.Checkout.SessionCreateParams.UiMode;
    if (props.plantype === "mealplan") setMealPlanAnswer(props.plan);
    else setTrainingPlanAnswer(props.plan);

    const { client_secret, url } = await createCheckoutSession(
      data,
      amount,
      props.plantype,
      props.clientSessionId
    );

    if (uiMode === "embedded") return setClientSecret(client_secret);

    window.location.assign(url as string);
  };

  return (
    <>
      <form action={formAction}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2, // Space between elements
            padding: 3,
            borderRadius: 2,
            backgroundColor: "background.paper", // Theme background color
            boxShadow: 3, // Adds a subtle shadow
            width: "100%",
            maxWidth: 400, // Limit the width
            margin: "0 auto", // Center the form
          }}
        >
          {/* Hidden Input */}
          <input type="hidden" name="uiMode" value={props.uiMode} />

          {/* Payment Amount */}
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", textAlign: "center", mb: 2 }}
          >
            Pay {formatAmountForDisplay(amount, "eur")} to see the full program
          </Typography>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            sx={{
              padding: "12px 24px",
              textTransform: "none",
              fontSize: "16px",
              borderRadius: "8px",
              boxShadow: loading ? "none" : 2,
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            {loading ? "Processing..." : "Pay Now"}
          </Button>
        </Box>
      </form>
      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={getStripe()}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : null}
    </>
  );
}
