import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { TrainingsPerWeekType, TrainingType } from "@/app/types/types";

// Type for the entire meal plan
interface TrainingPlanProps {
  plan: TrainingsPerWeekType;
  preview?: boolean;
}
export const TrainingPlan: React.FC<TrainingPlanProps> = ({
  plan,
  preview,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fdfcf9",
        padding: 2,
        borderRadius: "10px",
        boxShadow: 1,
      }}
    >
      {/* Header */}

      {/* Table Grid */}
      {/* Header Row */}
      <div
        key={"1"}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        {/* Header Row */}

        {/* Day Label */}
        {(preview
          ? plan.trainings.filter(
              (training, trainingIndex) => trainingIndex <= 1
            )
          : plan.trainings
        ).map((training, trainingIndex) => (
          <div key={trainingIndex}>{returnTileForTraining(training)}</div>
        ))}
        {preview && (
          <Typography style={{ color: "black" }} variant="h6">
            {" "}
            Press Pay to see the full program
          </Typography>
        )}
      </div>
    </Box>
  );
};

export const returnTileForTraining = (training: TrainingType) => {
  return (
    <>
      {daytile(training.day)}
      {/* Meals Row */}
      <div style={{ display: "flex", width: "100%", columnGap: "8px" }}>
        <TrainingRows training={training} />
      </div>
    </>
  );
};

export const daytile = (day: string) => {
  return (
    <div style={{ margin: "8px 0" }}>
      <span
        style={{
          display: "inline-block",
          backgroundColor: "darkblue",
          color: "#ffffff",
          fontWeight: "bold",
          padding: "4px 8px",
          borderRadius: "5px",
        }}
      >
        {day}
      </span>
    </div>
  );
};
export const TrainingRows = ({ training }: { training: TrainingType }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        cursor: "pointer",
        flex: 1,
        minHeight: "80px",
        padding: "8px",
        border: "1px solid #e0e0e0",
        backgroundColor: "#f9f9f9",
        boxSizing: "border-box",
        position: "relative", // Ensures absolute positioning works inside this div
      }}
    >
      {/* Meal Name */}
      <div
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "14px",
          color: "#6d4c41",
        }}
      >
        {training.workouttype}
      </div>
      <hr
        style={{ margin: "4px 0", border: "none", borderTop: "1px solid #ddd" }}
      />

      {/* Ingredients */}
      <div
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "12px",
          color: "#6d4c41",
        }}
      >
        {training.excercises.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </div>
      <hr
        style={{ margin: "4px 0", border: "none", borderTop: "1px solid #ddd" }}
      />

      {/* Nutrition Info */}
      <div
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: "10px",
          color: "#6d4c41",
        }}
      >
        Total Time: {training.totaltime} min <br />
        Location: {training.location}
      </div>
      <hr
        style={{ margin: "4px 0", border: "none", borderTop: "1px solid #ddd" }}
      />

      {/* Instructions Dialog */}
    </div>
  );
};
