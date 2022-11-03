import React, {useEffect, useState} from 'react'
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '../../uitls/Snackbar/Snackbar';
import Copyright from '../../uitls/Copyright';
import SvgIcon from '@mui/material/SvgIcon';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<string | boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState(false);


    const theme = createTheme({
      palette:{
          primary: {
              main: '#242424',
          }
      }
    });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const data = new FormData(event.currentTarget);
    setPassword(data.get('password'));
    setEmail(data.get('email'));

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  useEffect(()=>{

    if(password && password.length < 6){
        setError(true);
        setErrorMessage('A senha deve conter pelo menos 6 caracteres');
    }else if(password){
        setError(false);
        setErrorMessage('');
        axios.post('http://localhost:3000/auth/login',{
          email: email,
          password: password
        }).then((response)=>{
          console.log(response);
          if(response.status == 200){
            setOpen(true);
          }
        }).catch((error)=>{
          console.log(error);
        })
        ///setOpen(true);
    }
  },[password]);

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
            backgroundImage: 'url(hero-bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
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
            <SvgIcon className="jss6 jss12" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 150 }}>
                <path clip-rule="evenodd" shape-rendering="geometricPrecision" d="M15.034 16.045c.778-.681 1.285-1.576 1.524-2.684h7.68c-.352 3.167-1.627 5.731-3.824 7.694C18.216 23.018 15.51 24 12.298 24c-2.343 0-4.452-.515-6.328-1.544-1.876-1.029-3.34-2.459-4.392-4.29C.526 16.335 0 14.28 0 12c0-2.28.526-4.335 1.578-6.166C2.63 4.003 4.094 2.573 5.97 1.544 7.846.514 9.955 0 12.298 0c3.161 0 5.83.947 8.007 2.842 2.176 1.894 3.462 4.377 3.855 7.448H16.59c-.321-1.013-.87-1.828-1.648-2.446-.777-.617-1.648-.926-2.612-.926-1.327 0-2.397.467-3.21 1.401-.815.934-1.221 2.161-1.221 3.68 0 1.51.41 2.732 1.228 3.666.82.934 1.886 1.4 3.203 1.4 1.026 0 1.928-.34 2.705-1.02zm27.26-6.24c1.491 1.43 2.237 3.28 2.237 5.547 0 2.592-.858 4.682-2.575 6.268-1.718 1.587-3.98 2.38-6.79 2.38-2.776 0-5.033-.796-6.772-2.388-1.74-1.593-2.609-3.656-2.609-6.193 0-1.385.239-2.779.716-4.181.477-1.402 1.215-2.936 2.214-4.6l3.53-5.87 7.46-.001-4.177 6.926c.417-.022.746-.033.988-.033 2.359 0 4.284.715 5.777 2.145zm-5.037 7.675c.537-.547.806-1.256.806-2.128 0-.871-.269-1.586-.806-2.145-.538-.559-1.235-.838-2.09-.838-.856 0-1.554.28-2.09.838-.539.559-.807 1.274-.807 2.145 0 .872.268 1.581.806 2.128.537.548 1.235.822 2.09.822.856 0 1.553-.274 2.09-.822zm21.259-6.52c2.65.784 4.324 3.129 4.324 6.16 0 1.675-.578 3.13-1.718 4.325-1.133 1.186-2.554 1.788-4.224 1.788h-7.226a.101.101 0 0 1-.1-.102V.869c0-.056.044-.102.1-.102h6.365c1.547 0 2.824.517 3.793 1.538.996.98 1.504 2.29 1.504 3.887 0 2.142-1.063 3.908-2.818 4.768zm2 9.912c1.016-1.035 1.51-2.262 1.51-3.753 0-1.656-.507-3.013-1.507-4.031-1.035-1.053-2.31-1.566-3.898-1.566h-6.234v10.881h6.51c1.432 0 2.65-.515 3.619-1.53zM50.386 1.597v9.096h5.651c1.322 0 2.405-.422 3.221-1.253.837-.852 1.261-1.945 1.261-3.248 0-2.706-1.843-4.595-4.482-4.595h-5.65zm69.595 21.475a.101.101 0 0 1-.081.16h-.758a.1.1 0 0 1-.083-.043l-8.099-11.565-3.577 4.206v7.3a.101.101 0 0 1-.1.103h-.602a.101.101 0 0 1-.1-.102V.869c0-.056.045-.102.1-.102h.602c.055 0 .1.046.1.102v13.724L119 .803a.101.101 0 0 1 .077-.036h.796c.056 0 .101.046.101.102 0 .025-.01.048-.024.066l-8.451 10.032 8.482 12.105zM101.496.767c.055 0 .1.046.1.102v22.262a.101.101 0 0 1-.1.102h-.277a.098.098 0 0 1-.081-.042l-14.58-20.6v20.54a.101.101 0 0 1-.1.102h-.614a.101.101 0 0 1-.1-.102V.869c0-.056.045-.102.1-.102h.39a.1.1 0 0 1 .08.042l14.467 20.44V.87c0-.056.045-.102.1-.102h.615zM82.118 23.095a.101.101 0 0 1-.094.138h-.638a.1.1 0 0 1-.094-.068l-2.552-6.883H68.337l-2.551 6.885a.1.1 0 0 1-.094.066h-.639a.101.101 0 0 1-.093-.139L73.25.833a.1.1 0 0 1 .094-.066h.388a.1.1 0 0 1 .095.067l8.29 22.261zm-13.482-7.643h9.806L73.54 2.369l-4.903 13.083z">
                </path>
            </SvgIcon>

            <Typography component="h3" style={{color:'#242424'}}>
              Login
            </Typography>

            <Box component="form" method="POST" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} style={{color:'#242424'}}>
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
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Lembre-me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" underline="none" variant="body2" style={{color:'#242424'}}>
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="./cadastro" underline="none" variant="body2" style={{color:'#242424'}}>
                    {"Não tem conta? Faça o cadastro"}
                  </Link>
                </Grid>
              </Grid>
              {error && <Typography>{errorMessage}</Typography>}
              <Copyright />
              {open && <Snackbar open={open} hide={5} message={'Usuário logado com sucesso'} severity="success" /> }

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
