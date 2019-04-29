import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

import GradientBackground from '~/components/GradientBackground';
import Header from '~/components/Header';
import List from '~/components/List';
import UserMeetupsActions from '~/store/ducks/userMeetups';

import {
  Container,
  SearchBarContainer,
  SearchIcon,
  SearchText,
  EmptyStateContainer,
  EmptyStateText,
} from './styles';

const TabIcon = ({ tintColor }) => <Icon name="search" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

class Search extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    searchMeetupsRequest: PropTypes.func.isRequired,
    meetups: PropTypes.objectOf(PropTypes.array).isRequired,
  };

  onChangeText = (term) => {
    const { searchMeetupsRequest } = this.props;

    const searchTerm = term || '';

    searchMeetupsRequest(searchTerm);
  };

  render() {
    const { meetups } = this.props;
    return (
      <GradientBackground>
        <Header title="Busca" />
        <Container>
          <SearchBarContainer>
            <SearchIcon name="search" size={16} />
            <SearchText
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              clearTextOnFocus
              onChangeText={searchTerm => this.onChangeText(searchTerm)}
            >
              Buscar meetups
            </SearchText>
          </SearchBarContainer>
          {meetups && meetups.search.length > 0 ? (
            <List data={meetups.search} />
          ) : (
            <EmptyStateContainer>
              <EmptyStateText>Nenhum meetup encontrado.</EmptyStateText>
            </EmptyStateContainer>
          )}
        </Container>
      </GradientBackground>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.userMeetups.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserMeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
