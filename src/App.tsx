import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "", element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
