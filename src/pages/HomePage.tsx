import Feed from "../components/Feed";
import Rightbar from "../components/Layout/Rightbar";
import Sidebar from "../components/Layout/Sidebar";
import Stack from "@mui/material/Stack";

const HomePage = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  );
};

export default HomePage;
