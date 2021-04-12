import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from './Basics/FormInput';
import CustomButton from './Basics/CustomButton';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { signInWithGoogle } from '../firebase/firebaseUtils';

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
    reset({ email: '', password: '' });
  };

  return (
    <StyledSignIn>
      <h2 className="form-title">I already have an account</h2>
      <span className="form-subtitle"> Sign in with your email account </span>

      <Form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="button-group">
          <CustomButton className="sign-in-btn mr-3" type="submit">
            Sign In
          </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            variant="googleSignIn"
            className="sign-in-btn"
            type="submit"
          >
            Sign In with Google
          </CustomButton>
        </div>
      </Form>
    </StyledSignIn>
  );
};

const StyledSignIn = styled.div`
  width: 30vw;
  margin-top: 48px;
  .form-title {
    font-size: 24px;
  }
  .sign-in-form {
    margin-top: 36px;
  }
  .sign-in-btn {
    margin-top: 16px;
  }
`;

// SignIn.propTypes = {};

export default React.memo(SignIn);
