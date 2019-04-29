import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import CheckBox from '~/components/Checkbox';
import FormInput from '~/components/FormInput';
import GradientBackground from '~/components/GradientBackground';
import Header from '~/components/Header';
import PreferencesActions from '~/store/ducks/preferences';
import UserActions from '~/store/ducks/user';

import { Container, Title } from './styles';

class Profile extends Component {
  static propTypes = {
    preferences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
      }),
    ).isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
    updateUserRequest: PropTypes.func.isRequired,
    loadPreferencesRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: props.user.name,
      checkboxItems: {},
      password: '',
      passwordConfirmation: '',
    };
  }

  componentWillMount() {
    const { loadPreferencesRequest } = this.props;

    loadPreferencesRequest();
  }

  onItemClick = (itemId) => {
    const { checkboxItems } = this.state;

    if (!Object.keys(checkboxItems).length) {
      const { preferences } = this.props;
      preferences.forEach((item) => {
        checkboxItems[item.id] = { isChecked: false };
      });
    }

    checkboxItems[itemId].isChecked = !checkboxItems[itemId].isChecked;

    this.setState({ checkboxItems });
  };

  saveUserPreferences = (userId) => {
    const { updateUserRequest } = this.props;
    const {
      checkboxItems, name, password, passwordConfirmation,
    } = this.state;

    const selectedPreferences = [];

    Object.keys(checkboxItems).forEach((key) => {
      if (checkboxItems[key].isChecked) {
        selectedPreferences.push(key);
      }
    });

    const userPreferences = {
      name,
      password,
      password_confirmation: passwordConfirmation,
      preferences: selectedPreferences,
    };

    updateUserRequest(userId, userPreferences);
  };

  render() {
    const { preferences, user } = this.props;
    const {
      checkboxItems, name, password, passwordConfirmation,
    } = this.state;
    return (
      <GradientBackground>
        <Header title="Perfil" />
        <Container>
          <FormInput
            small
            label="Nome"
            placeholder=""
            value={name}
            clearTextOnFocus
            onChangeText={text => this.setState({ name: text })}
          />
          <FormInput
            small
            label="Senha"
            placeholder="Sua senha secreta"
            value={password}
            clearTextOnFocus
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />
          <FormInput
            small
            label="Nome"
            placeholder="Sua senha secreta"
            value={passwordConfirmation}
            clearTextOnFocus
            secureTextEntry
            onChangeText={text => this.setState({ passwordConfirmation: text })}
          />
          <Title>Preferências</Title>
          <CheckBox
            items={preferences}
            checkboxItems={checkboxItems}
            onItemClick={this.onItemClick}
          />
          <Button onPress={() => this.saveUserPreferences(user.id)}>Continuar</Button>
        </Container>
      </GradientBackground>
    );
  }
}

const mapStateToProps = state => ({
  preferences: state.preferences.data,
  user: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...PreferencesActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
