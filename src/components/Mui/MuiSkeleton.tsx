import { Box, Stack, Skeleton, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MuiSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img src="/vite.svg" alt="vite" width={256} height={155} />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {isLoading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
      </Stack>
      <Stack sx={{ width: "80%" }}>
        {isLoading ? (
          <>
            <Typography variant="body1">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width="100%" animation="wave" />
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body1">React MUI Tutorial</Typography>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;

{
  /* <Stack spacing={1} width={"250px"}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} animation={false} />
      <Skeleton
        variant="rectangular"
        width={250}
        height={125}
        animation={"wave"}
      />
    </Stack> */
}
