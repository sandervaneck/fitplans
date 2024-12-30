import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import AppTheme from "../theme/AppTheme";
import AddressForm from "./components/AddressForm";
import InfoMobile from "./components/InfoMobile";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";
import Info from "./components/Info";
import { callTrainingGpt } from "../openai/calls";
import { getTennisPrompt } from "../openai/functions";
import { TrainingScheduleAnswerType } from "../types/types";
import { CircularProgress } from "@mui/material";
import { TrainingPlans } from "../trainingplan/TrainingplanCards";

export type FormType = {
  age: number;
  weight: number;
  sport: string;
  currentstate: string;
  goal: string;
  plantime: number;
  trainings: number;
  experience: string;
};

const emptyFormType: FormType = {
  experience: "3 years",
  age: 22,
  weight: 77,
  sport: "Tennis",
  currentstate: "Level 3 KNLTB",
  goal: "Endurance",
  plantime: 8,
  trainings: 6,
};

const steps = ["Your info", "Your Goal", "Your plan"];
function getStepContent(
  step: number,
  form: FormType,
  setForm: (v: FormType) => void
) {
  switch (step) {
    case 0:
      return <AddressForm form={form} setForm={setForm} />;
    case 1:
      return <PaymentForm form={form} setForm={setForm} />;
    case 2:
      return <Review form={form} setForm={setForm} />;
    default:
      throw new Error("Unknown step");
  }
}
export default function Form() {
  const [form, setform] = React.useState(emptyFormType);
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const [loading, setLoading] = React.useState(false);
  const [answer, setAnswer] = React.useState<TrainingScheduleAnswerType | null>(
    null
  );
  const clientSessionId = crypto.randomUUID();

  const getMyTrainings = (form: FormType) => {
    const prompt = getTennisPrompt(form);
    callTrainingGpt(
      prompt,
      (a: TrainingScheduleAnswerType) => {
        setAnswer(a);
      },
      (b: boolean) => setLoading(b)
    );
  };
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />

      <Grid
        container
        sx={{
          height: {
            xs: "100%",
            sm: "calc(100dvh - var(--template-frame-height, 0px))",
          },
          mt: {
            xs: 4,
            sm: 0,
          },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            backgroundColor: "background.paper",
            borderRight: { sm: "none", md: "1px solid" },
            borderColor: { sm: "none", md: "divider" },
            alignItems: "start",
            pt: 16,
            px: 10,
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: 500,
            }}
          >
            <Info form={form} getMyTrainings={getMyTrainings} />
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: { xs: "transparent", sm: "background.default" },
            alignItems: "start",
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { sm: "space-between", md: "flex-end" },
              alignItems: "center",
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexGrow: 1,
              }}
            >
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{ width: "100%", height: 40 }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{ ":first-child": { pl: 0 }, ":last-child": { pr: 0 } }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <CardContent
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Plan details
                </Typography>
                <Typography variant="body1">{form.sport}</Typography>
              </div>
              <InfoMobile form={form} getMyTrainings={getMyTrainings} />
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              width: "100%",
              maxWidth: { sm: "100%", md: 600 },
              maxHeight: "720px",
              gap: { xs: 5, md: "none" },
            }}
          >
            {loading ? (
              <CircularProgress />
            ) : answer === null ? (
              <StepperContent
                activeStep={activeStep}
                getMyTrainings={getMyTrainings}
                form={form}
                setform={setform}
                handleBack={handleBack}
                handleNext={handleNext}
              />
            ) : (
              <>
                <TrainingPlans
                  plans={answer.trainings}
                  clientSessionId={clientSessionId}
                />
                <Button onClick={() => setAnswer(null)} variant="contained">
                  Create a new form
                </Button>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </AppTheme>
  );
}

interface StepperProps {
  activeStep: number;
  getMyTrainings: (form: FormType) => void;
  form: FormType;
  setform: (form: FormType) => void;
  handleBack: () => void;
  handleNext: () => void;
}
const StepperContent = ({
  activeStep,
  form,
  setform,
  handleBack,
  handleNext,
  getMyTrainings,
}: StepperProps) => {
  return (
    <>
      <Stepper
        id="mobile-stepper"
        activeStep={activeStep}
        alternativeLabel
        sx={{ display: { sm: "flex", md: "none" } }}
      >
        {steps.map((label) => (
          <Step
            sx={{
              ":first-child": { pl: 0 },
              ":last-child": { pr: 0 },
              "& .MuiStepConnector-root": { top: { xs: 6, sm: 12 } },
            }}
            key={label}
          >
            <StepLabel
              sx={{
                ".MuiStepLabel-labelContainer": { maxWidth: "70px" },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {getStepContent(activeStep, form, setform)}
        <Box
          sx={[
            {
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              alignItems: "end",
              flexGrow: 1,
              gap: 1,
              pb: { xs: 12, sm: 0 },
              mt: { xs: 2, sm: 0 },
              mb: "60px",
            },
            activeStep !== 0
              ? { justifyContent: "space-between" }
              : { justifyContent: "flex-end" },
          ]}
        >
          {activeStep !== 0 && (
            <Button
              startIcon={<ChevronLeftRoundedIcon />}
              onClick={handleBack}
              variant="text"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Previous
            </Button>
          )}
          {activeStep !== 0 && (
            <Button
              startIcon={<ChevronLeftRoundedIcon />}
              onClick={handleBack}
              variant="outlined"
              fullWidth
              sx={{ display: { xs: "flex", sm: "none" } }}
            >
              Previous
            </Button>
          )}
          {activeStep !== steps.length - 1 ? (
            <Button
              variant="contained"
              endIcon={<ChevronRightRoundedIcon />}
              onClick={handleNext}
              sx={{ width: { xs: "100%", sm: "fit-content" } }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                getMyTrainings(form);
              }}
              sx={{ width: { xs: "100%", sm: "fit-content" } }}
            >
              Get your Plan!
            </Button>
          )}
        </Box>
      </React.Fragment>
    </>
  );
};
