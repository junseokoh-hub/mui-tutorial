import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MuiCard = () => {
  return (
    <Box sx={{ width: "300px" }}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="/vite.svg"
          alt="vite image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            voluptatem architecto explicabo? Enim consectetur maxime adipisci
            consequatur accusamus iste quis, odit nostrum a ab voluptas nihil
            quaerat quisquam qui perferendis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
