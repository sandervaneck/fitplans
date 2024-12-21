import React, { useRef } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { MealsPerWeek } from "@/app/types/types";
import { MealPlan } from "./MealPlan";
import CheckoutForm from "@/app/components/stripe/embedded/CheckoutForm";

export interface MealPlanProps {
  plans: MealsPerWeek[];
  preview?: boolean;
  clientSessionId: string;
}
export const MealPlans: React.FC<MealPlanProps> = ({
  plans,
  preview,
  clientSessionId,
}) => {
  const planRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleDownload = async () => {
    const pdf = new jsPDF("p", "mm", "a4"); // PDF format A4
    const pageWidth = 150; // PDF usable width
    const pageHeight = 297; // PDF height in mm

    for (let i = 0; i < plans.length; i++) {
      const planElement = planRefs.current[i];
      if (planElement) {
        // Convert each MealPlan to canvas
        const canvas = await html2canvas(planElement, { scale: 2 }); // High-res capture
        const imgData = canvas.toDataURL("image/png");

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add the MealPlan image to PDF
        if (i !== 0) pdf.addPage(); // Add a new page after the first one
        pdf.addImage(
          imgData,
          "PNG",
          10,
          10,
          imgWidth,
          Math.min(imgHeight, pageHeight - 20)
        );
      }
    }

    pdf.save("nutrition-plan.pdf");
  };

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      spacing={2}
      style={{ margin: 2 }}
    >
      {!preview ? (
        <Button
          variant="contained"
          style={{ maxWidth: "50%", marginTop: 5 }}
          onClick={handleDownload}
        >
          <DownloadRounded /> Download Nutrition Plan
        </Button>
      ) : (
        <CheckoutForm
          uiMode="hosted"
          plan={plans} ///should be all plans
          plantype="mealplan"
          clientSessionId={clientSessionId}
        />
      )}

      {(preview ? plans.filter((plan, index) => index === 0) : plans).map(
        (plan, index) => (
          <div
            key={index}
            ref={(el) => {
              planRefs.current[index] = el;
            }}
            style={{
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <Typography
              align="center"
              style={{ marginBottom: "10px", color: "black" }}
            >
              Week {index + 1}
            </Typography>
            <MealPlan plan={plan} preview={preview} />
          </div>
        )
      )}
    </Stack>
  );
};
