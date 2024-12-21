import React, { useRef } from "react";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDownload = async () => {
    const pdf = new jsPDF("p", "mm", "a4"); // PDF format A4 (portrait)
    const pageWidth = isMobile ? 220 : 150; // PDF usable width for A4 (adjusted for mobile)
    const pageHeight = 297; // PDF height in mm
    const margin = 10; // Margin for better spacing
    const scaleFactor = isMobile ? 3 : 2; // Higher scale for mobile to enhance quality

    let currentPlanIndex = 0;

    while (currentPlanIndex < plans.length) {
      if (isMobile && currentPlanIndex + 1 < plans.length) {
        // Render two plans side-by-side on the same page (for mobile)
        const planElement1 = planRefs.current[currentPlanIndex];
        const planElement2 = planRefs.current[currentPlanIndex + 1];

        if (planElement1 && planElement2) {
          const canvas1 = await html2canvas(planElement1, {
            scale: scaleFactor,
          });
          const canvas2 = await html2canvas(planElement2, {
            scale: scaleFactor,
          });

          const imgData1 = canvas1.toDataURL("image/png");
          const imgData2 = canvas2.toDataURL("image/png");

          // Calculate dimensions for side-by-side placement
          const imgWidth = (pageWidth - margin * 3) / 2; // Divide usable width by 2
          const imgHeight1 = (canvas1.height * imgWidth) / canvas1.width;
          const imgHeight2 = (canvas2.height * imgWidth) / canvas2.width;

          // Ensure both weeks fit within the page height
          const maxHeight = Math.min(
            imgHeight1,
            imgHeight2,
            pageHeight - margin * 2
          );

          // Add images side by side
          pdf.addImage(imgData1, "PNG", margin, margin, imgWidth, maxHeight);
          pdf.addImage(
            imgData2,
            "PNG",
            margin + imgWidth + margin,
            margin,
            imgWidth,
            maxHeight
          );

          // Skip to the next two weeks
          currentPlanIndex += 2;
        } else {
          // Handle if one of the elements is null (shouldn't happen in normal use)
          break;
        }
      } else {
        // Render a single plan (for desktop or the last plan on mobile)
        const planElement = planRefs.current[currentPlanIndex];

        if (planElement) {
          const canvas = await html2canvas(planElement, { scale: scaleFactor });
          const imgData = canvas.toDataURL("image/png");

          const imgWidth = pageWidth - margin * 2;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          if (currentPlanIndex !== 0) pdf.addPage(); // Add a new page for each additional plan
          pdf.addImage(
            imgData,
            "PNG",
            margin,
            margin,
            imgWidth,
            Math.min(imgHeight, pageHeight - margin * 2)
          );

          currentPlanIndex++;
        } else {
          // Handle if the element is null (shouldn't happen in normal use)
          break;
        }
      }

      if (!isMobile) pdf.addPage(); // Ensure one plan per page for desktop
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
