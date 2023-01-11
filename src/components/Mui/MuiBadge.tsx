import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" max={99}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" invisible={false}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
