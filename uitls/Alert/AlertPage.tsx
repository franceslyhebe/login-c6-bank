import React, {useState, useEffect} from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material';

export default function BasicAlerts() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');

  const handleClose = () =>{
      setOpen(false);
  }


  return (

    <Stack>
          <Snackbar open={open} autoHideDuration={3000} onClose={() => {}}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Usuário logado com sucesso! ...Aguarde...
          </Alert>
          </Snackbar>
      </Stack>
  );
}
