import { Outlet } from "react-router-dom";
import MuiBottomNavigation from "../Mui/MuiBottomNavigation";
import MuiNavbar from "../Mui/MuiNavbar";

const Layout = () => {
  return (
    <>
      <MuiNavbar />
      <main>
        <Outlet />
      </main>
      <MuiBottomNavigation />
    </>
  );
};

export default Layout;
