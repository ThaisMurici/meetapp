import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Logo, Form } from './styles';
import SignUpActions from '~/store/ducks/signUp';

import Button from '~/components/Button';
import FormInput from '~/components/FormInput';
import GradientBackground from '~/components/GradientBackground';
import TextButton from '~/components/TextButton';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  signUp = () => {
    const {
      name, email, password, passwordConfirmation,
    } = this.state;
    const { signUpRequest } = this.props;
    signUpRequest(name, email, password, passwordConfirmation);
  };

  render() {
    const {
      name, email, password, passwordConfirmation,
    } = this.state;
    const { navigation } = this.props;
    return (
      <GradientBackground>
        <StatusBar barStyle="light-content" />
        <Container>
          <Logo>M</Logo>
          <Form>
            <FormInput
              label="Nome"
              placeholder="Digite seu nome"
              value={name}
              onChangeText={text => this.setState({ name: text })}
            />
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
            <FormInput
              label="Confirmação"
              placeholder="Confirme sua senha"
              value={passwordConfirmation}
              secureTextEntry
              onChangeText={text => this.setState({ passwordConfirmation: text.trim() })}
            />
            <Button onPress={this.signUp}>Criar conta</Button>
            <TextButton onPress={() => navigation.navigate('SignIn')}>Já tenho conta</TextButton>
          </Form>
        </Container>
      </GradientBackground>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signUp.loading,
  error: state.signUp.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignUpActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
