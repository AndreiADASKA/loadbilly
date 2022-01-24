import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

import { auth } from '../../firebase';

export default class LoginForm extends Component {
  handleSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password);
  };

  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{ email: '', password: '' }}
      >
        <Form className="form">
          <Field name="email " className="email" placeholder="Email" />
          <Field name="password" className="password" placeholder="password" />

          <button type="submit" className="button">
            Log In
          </button>
        </Form>
      </Formik>
    );
  }
}
