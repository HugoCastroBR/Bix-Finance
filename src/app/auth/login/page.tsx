'use client'
import React from 'react';
import LogoImage from '@/public/images/bix-tecnologia-logo.png';
import { styled } from '@mui/material/styles';
import { Container, Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import TextFieldCustom from '../../components/molecules/TextFieldCustom';
import { useRouter } from 'next/navigation';

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const router = useRouter();

  const handleLogin = (data: { email: string, password: string }) => {
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem('registeredUsers');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const user = users.find((user: { email: string, password: string }) => user.email === data.email && user.password === data.password);

      if (user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        router.push('/');
      } else {
        alert('Invalid email or password');
      }
    }
  };

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
            </Form>
          )}
        </Formik>
      </LoginBox>
    </ContainerStyled>
  )
}
