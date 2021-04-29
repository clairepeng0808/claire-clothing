import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from './Basics/FormInput';
import CustomButton from './Basics/CustomButton';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { auth, signInWithGoogle } from '../firebase/firebaseUtils';
import color from '../style/color';

const SignIn = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [error, setError] = useState(null);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
      setError(null);
      reset();
    } catch (error) {
      setError(error.message);
    }
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
        {error && <p className="error-msg">{error}</p>}
        <div className="button-group">
          <CustomButton className="sign-in-btn mr-3" type="submit">
            Sign In
          </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            variant="googleSignIn"
            className="sign-in-btn"
            type="button"
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
  .error-msg {
    font-size: 14px;
    color: ${color.danger};
  }
`;

// SignIn.propTypes = {};

export default React.memo(SignIn);
