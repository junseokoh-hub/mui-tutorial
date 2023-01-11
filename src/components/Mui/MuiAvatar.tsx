import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ backgroundColor: "success.light" }}>CK</Avatar>
          <Avatar src="/vite.svg" alt="VITE" />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ backgroundColor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="square"
          sx={{ backgroundColor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
