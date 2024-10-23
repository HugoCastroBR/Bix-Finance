'use client'
import React from 'react';
import LogoImage from '@/public/images/bix-tecnologia-logo.png';
import { styled } from '@mui/material/styles';
import { Container, Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import TextFieldCustom from '../components/molecules/TextFieldCustom';
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
  const router = useRouter()
 
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
            router.push('/')
            setSubmitting(false)
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
                disabled
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