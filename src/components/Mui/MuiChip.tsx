import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((prev) => prev.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked!")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked!")}
        onDelete={() => alert("Deleted!")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChip;
