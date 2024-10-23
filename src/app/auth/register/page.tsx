'use client';

import React from 'react';
import LogoImage from '@/public/images/bix-tecnologia-logo.png';
import { styled } from '@mui/material/styles';
import { Container, Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import TextFieldCustom from '../../components/molecules/TextFieldCustom';
import { RegisteredUser } from '@/app/utils/types';

const ContainerStyled = styled(Container)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LoginBox = styled(Box)({
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 40,
});

const AuthButton = styled(Button)({
  marginTop: 10,
  width: '100%',
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm your password'),
});

export default function Register() {

  return (
    <ContainerStyled>
      <LoginBox
        width={400}
        height={600}
        padding={2}
        bgcolor={'var(--highlight)'}
      >
        <Image
          src={LogoImage}
          alt="Company Logo"
          width={200}
          height={54}
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h1"
          fontSize={24}
          fontWeight={700}
          color="primary"
        >
          Register
        </Typography>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, setErrors }) => {
            if (typeof window !== "undefined") {
              const storedUsers = localStorage.getItem("registeredUsers");
              const users: RegisteredUser[] = storedUsers ? JSON.parse(storedUsers) : [];
              
              const userExists = users.find(user => user.email === data.email);

              if (userExists) {
                setErrors({ email: 'Email is already registered' });
                setSubmitting(false);
                return;
              }

              users.push({
                name: data.name,
                email: data.email,
                password: data.password
              });

              localStorage.setItem("registeredUsers", JSON.stringify(users));
            }
            setSubmitting(false);
          }}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <Form>
              <TextFieldCustom
                label="Name"
                margin="normal"
                name="name"
                required
                fullWidth
              />
              <TextFieldCustom
                label="Email"
                margin="normal"
                type="email"
                name="email"
                required
                fullWidth
              />
              <TextFieldCustom
                label="Password"
                margin="normal"
                name="password"
                required
                type="password"
                fullWidth
              />
              <TextFieldCustom
                label="Confirm Password"
                margin="normal"
                name="confirmPassword"
                required
                type="password"
                fullWidth
              />
              <AuthButton
                variant="outlined"
                size="large"
                disabled={((!(isValid && dirty)) || isSubmitting)}
                type="submit"
              >
                Register
              </AuthButton>
            </Form>
          )}
        </Formik>
      </LoginBox>
    </ContainerStyled>
  );
}
