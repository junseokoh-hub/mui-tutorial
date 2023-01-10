import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          CodeEvolution
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "100px",
            width: "100px",
            backgroundColor: "success.light",
            padding: "16px",
          }}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "primary.light", padding: "16px" }}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "primary.light", padding: "16px" }}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "primary.light", padding: "16px" }}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ backgroundColor: "primary.light", padding: "16px" }}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
