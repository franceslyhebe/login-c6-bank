import React, {useEffect, useState} from 'react'
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../uitls/Copyright';
import Snackbar from '../../uitls/Snackbar';

export default function Login() {
    const [email, setEmail] = useState<string | null>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [confirmpassword, setConfirmpassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);



    const theme = createTheme({
      palette:{
          primary: {
              main: '#FF5800',
          }
      }
    });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    setPassword(data.get('password'));
    setConfirmpassword(data.get('confirmpassword'));

    console.log({
      nome: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirmpassword: data.get('confirmpassword')
    });
  };

  useEffect(() => {
    if(password && password.length < 6) {
        setError(true);
        setErrorMessage('A senha deve ter pelo menos 6 caracteres');
    } else if(password) {
        setError(false);
        setErrorMessage('');

        //chamar a API do server para validar o login e senha
        //se estiver tudo certo, redireciona para a página de extrato

        //adicionar o snackbar
        setOpen(true);
        //fazer o redirect
    }
},[password]);

useEffect(() => {
  if(password !== confirmpassword) {
      if(password && confirmpassword) {
          setError(true);
          setErrorMessage('As senhas não conferem');
          setOpen(false);
      } else {
          setError(false);
          setErrorMessage('');
          setOpen(true);
      }

  }
},[password, confirmpassword]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <CssBaseline />
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#FF5800' }}>

            </Avatar>

            <Typography component="h1" variant="h5" style={{color:'#FF5800'}}>
              Cadastro de Usuário
            </Typography>

            <Box component="form" method="POST" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} style={{color:'#FF5800'}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome completo"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço de E-mail"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirmar senha"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>

              <Grid item xs>
                  <Link href="./login" underline="none" variant="body2" style={{color:'#FF5800'}}>
                    Voltar
                  </Link>
                </Grid>

              {error && <Typography>{errorMessage}</Typography>}
              <Copyright />
              {open && <Snackbar open={open} hide={7} message={'Usuário logado com sucesso'} severity="success" /> }


            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
