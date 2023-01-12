import { useState } from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import NotificationIcon from "@mui/icons-material/Notifications";

const StyledTollbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  padding: "0 10px",
  width: "40%",
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up(480)]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up(480)]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static">
      <StyledTollbar>
        <Typography variant={"h6"}>Navbar</Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/vite.svg"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src="/vite.svg" />
          <Typography component="span">John</Typography>
        </UserBox>
      </StyledTollbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
