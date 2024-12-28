"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { LoginDialog } from "./Login/LoginDialog";

export interface IdProps {
  isMobile: boolean;
  id: string | undefined;
  setId: (v: string | undefined) => void;
}

export const SearchAppBar: React.FC<IdProps> = ({ id, setId }) => {
  const [open, setOpen] = useState(false);
  console.log(id);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container
          maxWidth="xl" // Optional: Limits container width
          sx={{
            display: "flex", // Enable flexbox
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            flexDirection: "row", // Arrange items vertically
          }}
        >
          <Toolbar
            sx={{
              width: "100%", // Ensure full width
              justifyContent: "space-between", // Spread items across the toolbar
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Typography variant="h6" noWrap component="div">
                FitPlans
              </Typography>
            </Link>
            {id === undefined ? (
              <>
                <Button onClick={() => setOpen(true)} variant="contained">
                  Log in
                </Button>
                <LoginDialog
                  startValue={0}
                  id={id}
                  setId={setId}
                  open={open}
                  setOpen={setOpen}
                />
              </>
            ) : (
              <Button
                onClick={() => {
                  setId(undefined);
                  setOpen(false);
                }}
                variant="contained"
              >
                Log out
              </Button>
            )}
          </Toolbar>
        </Container>
        {/* {open && (
          <LoginDialog
            startValue={0}
            id={id}
            setId={setId}
            open={open}
            setOpen={setOpen}
          />
        )} */}
      </AppBar>
    </Box>
  );
};
