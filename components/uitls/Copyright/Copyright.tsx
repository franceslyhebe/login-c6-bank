import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';



type CopyProps = {
  site?: string;
}

export default function Copyright(props: CopyProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.c6bank.com.br/">
        C6 Bank
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
