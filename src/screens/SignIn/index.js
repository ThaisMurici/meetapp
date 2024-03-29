import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Logo, Form } from './styles';
import SignInActions from '~/store/ducks/signIn';

import Button from '~/components/Button';
import FormInput from '~/components/FormInput';
import GradientBackground from '~/components/GradientBackground';
import TextButton from '~/components/TextButton';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  signIn = () => {
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;
    return (
      <GradientBackground>
        <StatusBar barStyle="light-content" />
        <Container>
          <Logo>M</Logo>
          <Form>
            <FormInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={text => this.setState({ email: text.trim() })}
            />
            <FormInput
              label="Senha"
              placeholder="Sua senha secreta"
              value={password}
              secureTextEntry
              onChangeText={text => this.setState({ password: text.trim() })}
            />
            <Button onPress={this.signIn}>Entrar</Button>
            <TextButton onPress={() => navigation.navigate('SignUp')}>
              Criar conta grátis
            </TextButton>
          </Form>
        </Container>
      </GradientBackground>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignInActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
