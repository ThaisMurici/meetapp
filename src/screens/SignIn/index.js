import React from 'react';

import { StatusBar } from 'react-native';
import { Container, Logo, Form } from './styles';

import Button from '~/components/Button';
import FormInput from '~/components/FormInput';
import GradientBackground from '~/components/GradientBackground';
import TextButton from '~/components/TextButton';

const SignIn = () => (
  <GradientBackground>
    <StatusBar barStyle="light-content" />
    <Container>
      <Logo>M</Logo>
      <Form>
        <FormInput label="E-mail" placeholder="Digite seu e-mail" value="" />
        <FormInput label="Senha" placeholder="Sua senha secreta" value="" />
        <Button onPress={() => {}}>Entrar</Button>
        <TextButton>Criar conta grátis</TextButton>
      </Form>
    </Container>
  </GradientBackground>
);

export default SignIn;
