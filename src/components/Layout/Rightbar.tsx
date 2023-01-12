import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Rightbar = () => {
  return (
    <Box
      sx={{
        display: { sm: "none", md: "block" },
      }}
      flex={2}
      p={2}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
          <Avatar src="/vite.svg" alt="John Doe"></Avatar>
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={50} gap={5}>
          <ImageListItem>
            <img src="/vite.svg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/vite.svg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/vite.svg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/vite.svg" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
