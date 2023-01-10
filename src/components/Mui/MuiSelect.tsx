import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box sx={{ width: 200 }}>
      <TextField
        label="Select country"
        value={countries}
        onChange={handleChange}
        select
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error={countries.length === 0}
      >
        <MenuItem value="KO">Korea</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
