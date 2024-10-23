'use client';

import React, { useState } from 'react';
import LogoImage from '@/public/images/bix-tecnologia-logo.png';
import { styled } from '@mui/material/styles';
import { Container, Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import TextFieldCustom from '../../components/molecules/TextFieldCustom';
import { RegisteredUser } from '@/app/utils/types';
import Link from 'next/link';

const ContainerStyled = styled(Container)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ResetPasswordBox = styled(Box)({
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
  email: Yup.string().email('Invalid email').required('Email is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm your new password'),
});

export default function ResetPassword() {
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <ContainerStyled as={'main'}>
      <ResetPasswordBox
        width={400}
        height={500}
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
          Reset Password
        </Typography>
        {successMessage && (
          <Typography
            variant="h6"
            fontSize={16}
            fontWeight={500}
            color="green"
            style={{ marginBottom: 20 }}
          >
            {successMessage}
          </Typography>
        )}
        <Formik
          initialValues={{
            email: '',
            newPassword: '',
            confirmNewPassword: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, setErrors }) => {
            if (typeof window !== "undefined") {
              const storedUsers = localStorage.getItem("registeredUsers");
              const users: RegisteredUser[] = storedUsers ? JSON.parse(storedUsers) : [];
              const userIndex = users.findIndex(user => user.email === data.email);

              if (userIndex === -1) {
                setErrors({ email: 'Email not found' });
                setSubmitting(false);
                return;
              }

              users[userIndex].password = data.newPassword;
              localStorage.setItem("registeredUsers", JSON.stringify(users));

              setSuccessMessage('Password has been reset successfully!');
            }
            setSubmitting(false);
          }}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <Form>
              <TextFieldCustom
                label="Email"
                margin="normal"
                type="email"
                name="email"
                required
                fullWidth
              />
              <TextFieldCustom
                label="New Password"
                margin="normal"
                name="newPassword"
                required
                type="password"
                fullWidth
              />
              <TextFieldCustom
                label="Confirm New Password"
                margin="normal"
                name="confirmNewPassword"
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
                Reset Password
              </AuthButton>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='center'
                alignItems='center'
                width='100%'
                marginTop={1}
              >
                <Link href="/auth/login">
                  <Typography
                    variant='h6'
                    fontSize={16}
                    fontWeight={500}
                    color='primary'
                  >
                    Login
                  </Typography>
                </Link>
              </Box>
            </Form>
          )}
        </Formik>
      </ResetPasswordBox>
    </ContainerStyled>
  );
}
