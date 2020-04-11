import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';

const Login = () => (
  <Paper className={styles.component}>
    <Typography variant="h6">
      Sign in
    </Typography>
    <form action='/panel'>
      <TextField className={styles.textfield} id="standard-basic" label="Login" required/>
      <TextField className={styles.textfield} id="standard-password-input" label="Password" type="password" required/>
      <Button type="submit">Login</Button>
    </form>
  </Paper>
);

export default Login;
