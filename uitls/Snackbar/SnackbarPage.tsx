import React from 'react';
import AlertPage from '../Alert/AlertPage';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';



export default function SnackbarPage(props:any) {
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
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
        <AlertPage {...props}/>
      </Snackbar>
    </Stack>
  )
}
