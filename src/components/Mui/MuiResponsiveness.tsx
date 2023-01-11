import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: "100px", //0
            sm: "200px", //600
            md: "300px", //900
            lg: "400px", //1200
            xl: "500px", //1536
          },
          backgroundColor: "secondary.main",
        }}
      />
      <StyledBox />
    </>
  );
};

export default MuiResponsiveness;
