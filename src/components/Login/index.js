import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return <LoginForm />;
  }
}
