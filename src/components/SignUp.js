import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from './Basics/FormInput';
import CustomButton from './Basics/CustomButton';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import color from '../style/color';
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from '../firebase/firebaseUtils';

const SignUp = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [error, setError] = useState(null);

  const password = watch('password');

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      await createUserProfileDocument(userAuth, {
        displayName: data.displayName,
      });
      setError(null);
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <StyledSignIn>
      <h2 className="form-title">I do not have an account</h2>
      <span className="form-subtitle"> Sign up with your email & password</span>
      <Form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('displayName', {
            required: 'Please fill out this field.',
            minLength: {
              value: 3,
              message:
                'The minimum length of the display name should be 3 characters.',
            },
          })}
          label="Display Name"
          content={watch('displayName')}
          defaultValue=""
          errors={errors.displayName}
        />
        <FormInput
          {...register('email', {
            required: 'Please fill out this field.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
              message: 'Incorrect Email Format.',
            },
          })}
          label="Email"
          defaultValue=""
          content={watch('email')}
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
          defaultValue=""
          content={watch('password')}
          errors={errors.password}
          helptext="Your password must have at least 8 characters."
        />
        <FormInput
          {...register('confirmPassword', {
            required: 'Please fill out this field.',
            validate: (value) =>
              value === password || 'The passwords do not match.',
          })}
          label="Confirm Password"
          type="password"
          defaultValue=""
          content={watch('confirmPassword')}
          errors={errors.confirmPassword}
        />
        {error && <p className="error-msg">{error}</p>}
        <div className="button-group">
          <CustomButton className="sign-in-btn mr-3" type="submit">
            Sign Up
          </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            variant="googleSignIn"
            className="sign-in-btn"
            type="button"
          >
            Sign Up with Google
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
  .error-msg {
    font-size: 14px;
    color: ${color.danger};
  }
`;

// SignIn.propTypes = {};

export default React.memo(SignUp);
