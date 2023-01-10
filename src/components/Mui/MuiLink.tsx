import { Stack, Link, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="body2">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="about" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
      <Link href="#"></Link>
    </Stack>
  );
};

export default MuiLink;
