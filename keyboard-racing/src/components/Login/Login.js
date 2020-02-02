import React from 'react';
import Button from '@material-ui/core/Button';
import { AWS_CLIENT_ID, REDIRECT_AUTH_URI } from '../../config';

class Login extends React.Component {

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" href={`https://keyboard-racing.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=${AWS_CLIENT_ID}&redirect_uri=${REDIRECT_AUTH_URI}`}>
          Login
        </Button>
      </div>
    )
  }
}

export default Login;
