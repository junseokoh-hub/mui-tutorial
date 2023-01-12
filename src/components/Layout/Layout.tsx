import { useState } from "react";
import { Outlet } from "react-router-dom";
import Add from "../Add";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, PaletteMode } from "@mui/material";

const Layout = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 480,
        md: 768,
        lg: 1024,
      },
    },
    status: {
      danger: "#e53e3e",
    },
    palette: {
      mode: mode,
      otherColor: {
        main: "#999",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ backgroundColor: "background.default", color: "text.primary" }}
      >
        <main>
          <Navbar />
          <Outlet context={{ mode, setMode }} />
          <Add />
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
