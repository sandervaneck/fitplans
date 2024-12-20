"use client";
import { useMediaQuery, Stack, Card } from "@mui/material";
import { useState } from "react";
import { emptyTrainingForm } from "../components/emptyForms";
import { NavigateTabs } from "../components/NavigateTabs";
import { TrainingScheduleAnswerType } from "../types/types";
import { RequestTrainingPlanForm } from "../components/RequestForm/RequestTrainingPlanForm";
import { TrainingPlans } from "./TrainingplanCards";

// const exampleTrainings: TrainingScheduleAnswerType = {
//   trainings: [
//     {
//       week: 1,
//       trainings: [
//         {
//           day: "Monday",
//           totaltime: 60,
//           location: "Gym",
//           workouttype: "Strength",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Wednesday",
//           totaltime: 45,
//           location: "Home",
//           workouttype: "Cardio",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Friday",
//           totaltime: 50,
//           location: "Park",
//           workouttype: "HIIT",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//       ],
//     },
//     {
//       week: 2,
//       trainings: [
//         {
//           day: "Tuesday",
//           totaltime: 55,
//           location: "Gym",
//           workouttype: "Strength",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Thursday",
//           totaltime: 40,
//           location: "Home",
//           workouttype: "Yoga",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Saturday",
//           totaltime: 30,
//           location: "Park",
//           workouttype: "Stretching",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//       ],
//     },
//     {
//       week: 3,
//       trainings: [
//         {
//           day: "Monday",
//           totaltime: 70,
//           location: "Gym",
//           workouttype: "Strength",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Wednesday",
//           totaltime: 60,
//           location: "Pool",
//           workouttype: "Swimming",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Friday",
//           totaltime: 45,
//           location: "Home",
//           workouttype: "Pilates",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//       ],
//     },
//     {
//       week: 4,
//       trainings: [
//         {
//           day: "Monday",
//           totaltime: 60,
//           location: "Gym",
//           workouttype: "Strength",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Wednesday",
//           totaltime: 45,
//           location: "Home",
//           workouttype: "Cardio",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Friday",
//           totaltime: 50,
//           location: "Park",
//           workouttype: "HIIT",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//       ],
//     },
//     {
//       week: 5,
//       trainings: [
//         {
//           day: "Tuesday",
//           totaltime: 55,
//           location: "Gym",
//           workouttype: "Strength",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Thursday",
//           totaltime: 40,
//           location: "Home",
//           workouttype: "Yoga",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Saturday",
//           totaltime: 30,
//           location: "Park",
//           workouttype: "Stretching",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//       ],
//     },
//     {
//       week: 6,
//       trainings: [
//         {
//           day: "Monday",
//           totaltime: 70,
//           location: "Gym",
//           workouttype: "Strength",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Wednesday",
//           totaltime: 60,
//           location: "Pool",
//           workouttype: "Swimming",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//         {
//           day: "Friday",
//           totaltime: 45,
//           location: "Home",
//           workouttype: "Pilates",
//           excercises: [
//             "Bench Press, 10 reps",
//             "Deadlifts , 10 reps",
//             "Squats , 10 reps",
//             "Pull ups, 10 reps",
//           ],
//         },
//       ],
//     },
//   ],
// };

export const TrainingPlanPageContent = () => {
  const [form, setForm] = useState(emptyTrainingForm);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [answer, setAnswer] = useState<TrainingScheduleAnswerType | null>(null);
  const clientSessionId = crypto.randomUUID();

  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Card
        sx={{
          maxWidth: isMobile ? "80%" : "60%",
          backgroundColor: "background.paper",
          borderRight: { sm: "none", md: "1px solid" },
          borderColor: { sm: "none", md: "divider" },
          gap: 4,
          margin: 10,
        }}
      >
        <NavigateTabs v={1} />
        <RequestTrainingPlanForm
          form={form}
          setForm={setForm}
          answer={answer}
          setAnswer={setAnswer}
          isMobile={isMobile}
        />
      </Card>
      {answer !== null && (
        <TrainingPlans
          plans={answer.trainings}
          preview={true}
          clientSessionId={clientSessionId}
        />
      )}
    </Stack>
  );
};
