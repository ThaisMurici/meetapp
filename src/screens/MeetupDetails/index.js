import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  StyledImage,
  Container,
  Title,
  TinyText,
  Description,
  Address,
  ButtonContainer,
} from './styles';

import Button from '~/components/Button';
import Header from '~/components/Header';
import GradientBackground from '~/components/GradientBackground';
import UserMeetupsActions from '~/store/ducks/userMeetups';

class MeetupDetails extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    registerInMeetupRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    meetup: {},
  };

  componentWillMount() {
    const { navigation } = this.props;
    const meetup = navigation.getParam('meetup', {});

    this.setState({ meetup });
  }

  register = (meetupId) => {
    const { registerInMeetupRequest, user } = this.props;

    registerInMeetupRequest(user.id, meetupId);
  };

  render() {
    const { meetup } = this.state;
    return (
      <GradientBackground>
        <Header title={meetup.title} />
        <StyledImage
          source={{ uri: 'http://www.thesecretcabal.com/portals/0/Site%20Images/Meetup1.jpg' }}
        />
        <Container>
          <Title>{meetup.title}</Title>
          <TinyText>{`${meetup.__meta__.users_count} membro(s)`}</TinyText>
          <Description>{meetup.description}</Description>
          <TinyText>Realizado em:</TinyText>
          <Address>
            {`Rua ${meetup.address.street}, ${meetup.address.number}. Bairro ${
              meetup.address.district
            }. ${meetup.address.city} - ${meetup.address.state}`}
          </Address>
          <ButtonContainer>
            <Button onPress={() => this.register(meetup.id)}>Inscreva-se</Button>
          </ButtonContainer>
        </Container>
      </GradientBackground>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserMeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupDetails);
