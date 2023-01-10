import Typography from "@mui/material/Typography";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 headings</Typography>
      <Typography variant="h2">h2 headings</Typography>
      <Typography variant="h3">h3 headings</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 headings
      </Typography>
      <Typography variant="h5">h5 headings</Typography>
      <Typography variant="h6">h6 headings</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        laboriosam non voluptates laborum, sed tenetur nostrum nesciunt minus
        odio quasi quam ea fuga eius delectus sint adipisci eos quaerat. Ipsum.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        repellendus quo ea nihil corporis dicta autem tempore hic ad distinctio!
        Quod nobis, assumenda nam sequi ipsam quisquam dolore unde tenetur!
      </Typography>
    </div>
  );
};

export default MuiTypography;
