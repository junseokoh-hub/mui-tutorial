import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange, grey } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Layout from "./components/Layout/Layout";
import MuiLink from "./components/Mui/MuiLink";
import MuiResponsiveness from "./components/Mui/MuiResponsiveness";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: { main: orange[500] },
    neutral: {
      main: grey[500],
      darker: grey[700],
    },
  },
});

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Layout />
          </LocalizationProvider>
        </ThemeProvider>
      ),
      children: [
        { path: "", element: <MuiResponsiveness /> },
        { path: "/about", element: <MuiLink /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
