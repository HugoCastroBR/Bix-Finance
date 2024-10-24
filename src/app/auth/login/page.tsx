'use client'
import React, { useState } from 'react';
import LogoImage from '@/public/images/bix-tecnologia-logo.png';
import { styled } from '@mui/material/styles';
import { Container, Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import TextFieldCustom from '../../components/molecules/TextFieldCustom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ContainerStyled = styled(Container)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const LoginBox = styled(Box)({
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 40,
})

const AuthButton = styled(Button)({
  marginTop: 10,
  width: '100%',
})

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
});

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (data: { email: string, password: string }) => {
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem('registeredUsers');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      const user = users.find((user: { email: string, password: string }) => user.email === data.email && user.password === data.password);

      if (user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        router.push('/');
      } else {
        setErrorMessage('Invalid email or password');
      }
    }
  };

  return (
    <ContainerStyled as={'main'}>
      <LoginBox
        width={400}
        height={600}
        padding={2}
        bgcolor={'var(--highlight)'}
      >
        <Image
          src={LogoImage}
          alt="My Image"
          width={200}
          height={54}
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant='h1'
          fontSize={24}
          fontWeight={700}
          color='primary'
        >
          Login
        </Typography>
        <Formik
          validateOnChange={true}
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            handleLogin(data);
            setSubmitting(false);
          }}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <Form>
              <TextFieldCustom
                label="Email"
                margin="normal"
                type='email'
                name='email'
                required
                fullWidth
              />
              <TextFieldCustom
                label="Password"
                margin="normal"
                name='password'
                required
                type='password'
                fullWidth
              />

              {errorMessage && (
                <Typography color="error" variant="body2" style={{ marginTop: 10 }}>
                  {errorMessage}
                </Typography>
              )}

              <AuthButton
                variant="outlined"
                size='large'
                disabled={((!(isValid && dirty)) || isSubmitting)}
                type='submit'
              >
                Login
              </AuthButton>
              <AuthButton
                variant="outlined"
                size='large'
                onClick={() => router.push('/auth/register')}
              >
                Register
              </AuthButton>

              <Box
                display='flex'
                flexDirection='row'
                justifyContent='center'
                alignItems='center'
                width='100%'
                marginTop={1}
              >
                <Link href="/auth/new-password">
                  <Typography
                    variant='h6'
                    fontSize={16}
                    fontWeight={500}
                    color='primary'
                  >
                    Forgot Password?
                  </Typography>
                </Link>
              </Box>
            </Form>
          )}
        </Formik>
      </LoginBox>
    </ContainerStyled>
  );
}
