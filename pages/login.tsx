import React, {useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SnackbarPage from '../uitls/Snackbar/SnackbarPage';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://avanade.com.br/">
        Avanade
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
        palette:{
            primary: {
                main: '#FF5800',
            }
        }
});

export default function SignInSide() {
    const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<string | boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPassword(data.get('password'));
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    useEffect(()=>{
        
        if(password && password.length < 6){
            setError(true);
            setErrorMessage('A senha precisa ter no mínimo 6 caracteres');
        }else if(password){
            setError(false);
            setErrorMessage('');
            setOpen(true);
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1529089202281-2180f7a2289c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{color:'#FF5800'}}>
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} style={{color:'#FF5800'}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
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
                  <Link href="#" underline="none" variant="body2" style={{color:'#FF5800'}}>
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="none" variant="body2" style={{color:'#FF5800'}}>
                    {"Não tem conta? Faça o cadastro"}
                  </Link>
                </Grid>
              </Grid>
              {error && <Typography>{errorMessage}</Typography>}
              <Copyright sx={{ mt: 5 }} />

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}