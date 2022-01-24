import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth, db } from '../../firebase';

export default class SignUpForm extends Component {
  handleSubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      (user) => {
        // user.user.updateProfile({ displayName: values.username });
      }
    );
  };
  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{ email: '', password: '', username: '' }}
      >
        <Form className="form">
          <Field name="email" className="input-email" placeholder="Email..." />
          <Field name="username" className="email" placeholder="Username..." />
          <Field
            name="password"
            className="password"
            placeholder="password..."
            type="password"
          />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    );
  }
}
