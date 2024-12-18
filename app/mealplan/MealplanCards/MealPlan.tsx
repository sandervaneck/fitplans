import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { MealsPerWeek, Meal } from "@/app/types/types";

// Type for the entire meal plan
interface MealPlanProps {
  plan: MealsPerWeek;
  preview?: boolean;
}

export const MealPlan: React.FC<MealPlanProps> = ({ plan, preview }) => {
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
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        {/* Header Row */}
        {headerTiles(plan)}
        {/* Day Label */}
        {returnTilesForDay("Monday", plan.monday)}
        {returnTilesForDay("Tuesday", plan.tuesday)}
        {preview ? (
          <>The rest you can see when pressing the payment button</>
        ) : (
          <>
            {returnTilesForDay("Wednesday", plan.wednesday)}
            {returnTilesForDay("Thursday", plan.thursday)}
            {returnTilesForDay("Friday", plan.friday)}
            {returnTilesForDay("Saturday", plan.saturday)}
            {returnTilesForDay("Sunday", plan.sunday)}
          </>
        )}
      </div>
    </Box>
  );
};

export const returnTilesForDay = (day: string, plan: Meal[]) => {
  return (
    <>
      {daytile(day, plan)}
      {/* Meals Row */}
      <div
        style={{ display: "flex", width: "100%", columnGap: "8px" }}
        key={day}
      >
        {plan.map((meal) => (
          <DayRow meal={meal} key={meal.name} />
        ))}
      </div>
    </>
  );
};

export const daytile = (day: string, plan: Meal[]) => {
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
        {day}: Kcal: {plan.reduce((acc, meal) => acc + meal.kcal, 0)} | P:{" "}
        {plan.reduce((acc, meal) => acc + meal.protein, 0)} | C:{" "}
        {plan.reduce((acc, meal) => acc + meal.carbs, 0)} | F:{" "}
        {plan.reduce((acc, meal) => acc + meal.fats, 0)}
      </span>
    </div>
  );
};
export const headerTiles = (plan: MealsPerWeek) => {
  return (
    <div style={{ display: "flex", width: "100%", columnGap: "8px" }}>
      {plan.monday.map((meal, index) => (
        <div
          key={index}
          style={{
            flex: 1, // Equal width for all header boxes
            backgroundColor: "darkblue",
            padding: "8px",
            textAlign: "center",
            border: "1px solid #e0e0e0",
            boxSizing: "border-box", // Ensures padding doesn't alter box size
            borderRadius: "5px",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontFamily: "'Georgia', serif",
              fontSize: "14px",
            }}
          >
            {meal.mealtype}
          </span>
        </div>
      ))}
    </div>
  );
};
export const DayRow = ({ meal }: { meal: Meal }) => {
  // const [open, setOpen] = useState(false);

  return (
    <div
      // onClick={() => setOpen(!open)}
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
        {meal.name}
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
        {meal.ingredients.map((i, idx) => (
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
        Kcal: {meal.kcal} | P: {meal.protein} | C: {meal.carbs} | F: {meal.fats}
      </div>
      <hr
        style={{ margin: "4px 0", border: "none", borderTop: "1px solid #ddd" }}
      />
    </div>
  );
};
