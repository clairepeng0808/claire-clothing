import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from '../components/FormInput';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const SignIn = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [emailField, passwordField] = watch(['email', 'password']);

  const onSubmit = (data, e) => {
    e.preventDefault();
    reset({ email: '', password: '' });
  };

  return (
    <StyledSignIn validated>
      <h2 className="form-title">I already have an account</h2>
      <span className="form-subtitle"> Sign in with your email account </span>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('email', {
            required: 'Please fill out this field.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
              message: 'Incorrect Email Format.',
            },
          })}
          label="Email"
          content={emailField}
          defaultValue=""
          errors={errors.email}
        />
        <FormInput
          {...register('password', {
            required: 'Please fill out this field.',
            minLength: {
              value: 8,
              message:
                'The minimum length of the password should be 8 characters.',
            },
          })}
          label="Password"
          type="password"
          content={passwordField}
          defaultValue=""
          errors={errors.password}
          helptext="Your password must have at least 8 characters."
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  width: 30vw;
  margin-top: 48px;
`;

// SignIn.propTypes = {};

export default React.memo(SignIn);
