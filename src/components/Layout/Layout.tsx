import { Outlet } from "react-router-dom";
import MuiNavbar from "../Mui/MuiNavbar";

const Layout = () => {
  return (
    <>
      <MuiNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
