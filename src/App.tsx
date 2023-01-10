import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MuiLink from "./components/Mui/MuiLink";
import MuiSpeedDial from "./components/Mui/MuiSpeedDial";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <MuiSpeedDial /> },
        { path: "/about", element: <MuiLink /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
