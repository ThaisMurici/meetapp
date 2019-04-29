import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import List from '~/components/List';
import GradientBackground from '~/components/GradientBackground';
import UserMeetupsActions from '~/store/ducks/userMeetups';

import { ActivityIndicator } from 'react-native';
import {
  Container,
  SectionTitle,
  LoadingContainer,
  EmptyStateContainer,
  EmptyStateText,
} from './styles';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

class Dashboard extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    meetupsData: PropTypes.objectOf(PropTypes.array).isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    loadUserMeetupsRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    const { loadUserMeetupsRequest, user } = this.props;

    loadUserMeetupsRequest(user.id);
  }

  renderMeetups = (meetupsData, meetupsType) => (meetupsData[meetupsType].length > 0 ? (
    <List horizontal data={meetupsData[meetupsType]} />
  ) : (
    <EmptyStateContainer>
      <EmptyStateText>Nenhum meetup encontrado.</EmptyStateText>
    </EmptyStateContainer>
  ));

  render() {
    const { meetupsData, loading } = this.props;
    return (
      <GradientBackground>
        <Header title="Início" />
        <Container>
          <SectionTitle>Inscrições</SectionTitle>
          {loading ? (
            <LoadingContainer>
              <ActivityIndicator size="small" color="#fff" />
            </LoadingContainer>
          ) : (
            this.renderMeetups(meetupsData, 'registrations')
          )}

          <SectionTitle>Próximos meetups</SectionTitle>
          {loading ? (
            <LoadingContainer>
              <ActivityIndicator size="small" color="#fff" />
            </LoadingContainer>
          ) : (
            this.renderMeetups(meetupsData, 'next')
          )}

          <SectionTitle>Recomendados</SectionTitle>
          {loading ? (
            <LoadingContainer>
              <ActivityIndicator size="small" color="#fff" />
            </LoadingContainer>
          ) : (
            this.renderMeetups(meetupsData, 'recomended')
          )}
        </Container>
      </GradientBackground>
    );
  }
}

const mapStateToProps = state => ({
  meetupsData: state.userMeetups.data,
  loading: state.userMeetups.loading,
  user: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserMeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
