import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  },
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}
      <Snackbar autoHideDuration={6000} open={open} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </div>
  );
};

export default MuiSnackbar;
