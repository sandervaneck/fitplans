import React, { useRef } from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { TrainingPlan } from "./TrainingPlan";
import { TrainingsPerWeekType } from "@/app/types/types";
import CheckoutForm from "@/app/components/stripe/embedded/CheckoutForm";

export interface TrainingsPlanProps {
  plans: TrainingsPerWeekType[];
  preview?: boolean;
  clientSessionId: string;
}

export const TrainingPlans: React.FC<TrainingsPlanProps> = ({
  plans,
  preview,
  clientSessionId,
}) => {
  const planRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleDownload = async () => {
    const pdf = new jsPDF("p", "mm", "a4"); // A4 page size
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const marginTop = 10;
    const marginSide = 10;
    const columnWidth = (pageWidth - marginSide * 2) / 3; // Divide page into 3 columns

    let currentX = marginSide; // Starting X position for each column
    let currentY = marginTop; // Starting Y position

    for (let i = 0; i < plans.length; i++) {
      const planElement = planRefs.current[i];
      if (planElement) {
        // Convert component to canvas
        const canvas = await html2canvas(planElement, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        // Calculate scaled dimensions to fit column
        const imgWidth = columnWidth - 10; // Add padding
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Check if content overflows page height
        if (currentY + imgHeight > pageHeight - marginTop) {
          pdf.addPage(); // Add a new page
          currentY = marginTop; // Reset Y position
          currentX = marginSide; // Reset X position
        }

        // Add image to PDF
        pdf.addImage(imgData, "PNG", currentX, currentY, imgWidth, imgHeight);

        // Update X and Y positions
        currentX += columnWidth; // Move to next column
        if (currentX + columnWidth > pageWidth) {
          currentX = marginSide; // Reset to first column
          currentY += imgHeight + 10; // Move to next row
        }
      }
    }

    pdf.save("training-plan.pdf");
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={2}
      style={{ margin: 2 }}
    >
      {!preview ? (
        <Button
          variant="contained"
          style={{ maxWidth: "50%", marginTop: 5 }}
          onClick={handleDownload}
        >
          <DownloadRounded /> Download Training Plan
        </Button>
      ) : (
        <CheckoutForm
          uiMode="hosted"
          plan={plans}
          plantype="trainingplan"
          clientSessionId={clientSessionId}
        />
      )}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        style={{ marginTop: "20px" }}
      >
        {/* (preview ? plans.filter((p, i) => i <= 1) : plans) */}
        {(preview ? plans.filter((plan, index) => index <= 0) : plans).map(
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
              <TrainingPlan plan={plan} preview={preview} />
            </div>
          )
        )}
      </Box>
    </Stack>
  );
};
