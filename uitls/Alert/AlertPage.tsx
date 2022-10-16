import React from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import SnackbarPage from '../Snackbar/SnackbarPage';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        This is a success message!
      </Alert>
  );
}