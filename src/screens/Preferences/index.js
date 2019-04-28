import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import CheckBox from '~/components/Checkbox';
import GradientBackground from '~/components/GradientBackground';
import UserActions from '~/store/ducks/user';

import {
  Container, Greeting, Description, Title,
} from './styles';

class Preferences extends Component {
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
  };

  state = {
    checkboxItems: {},
  };

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
    const { checkboxItems } = this.state;

    const selectedPreferences = [];

    Object.keys(checkboxItems).forEach((key) => {
      if (checkboxItems[key].isChecked) {
        selectedPreferences.push(key);
      }
    });

    const userPreferences = {
      preferences: selectedPreferences,
    };

    updateUserRequest(userId, userPreferences);
  };

  render() {
    const { preferences, user } = this.props;
    const { checkboxItems } = this.state;
    return (
      <GradientBackground>
        <StatusBar barStyle="light-content" />
        <Container>
          <Greeting>{`Olá, ${user.name.split(' ')[0]}`}</Greeting>
          <Description>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
            selecionarmos os melhores meetups pra você:
          </Description>
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

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
