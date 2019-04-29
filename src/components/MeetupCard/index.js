import React from 'react';
import PropTypes from 'prop-types';

import { navigate } from '~/services/navigation';

import {
  Container,
  ImageContainer,
  StyledImage,
  InfoContainer,
  TextContainer,
  Title,
  LightText,
  DetailsIconContainer,
  DetailsIcon,
} from './styles';

const MeetupCard = ({ item, horizontal }) => (
  <Container horizontal={horizontal}>
    <ImageContainer>
      <StyledImage
        horizontal={horizontal}
        source={{ uri: 'http://www.thesecretcabal.com/portals/0/Site%20Images/Meetup1.jpg' }}
      />
    </ImageContainer>
    <InfoContainer>
      <TextContainer>
        <Title>{item.title}</Title>
        <LightText>{`${item.__meta__.users_count} membro(s)`}</LightText>
      </TextContainer>
      <DetailsIconContainer onPress={() => navigate('MeetupDetails', { meetup: item })}>
        <DetailsIcon name="chevron-right" size={14} />
      </DetailsIconContainer>
    </InfoContainer>
  </Container>
);

MeetupCard.defaultProps = {
  horizontal: false,
};

MeetupCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    __meta__: PropTypes.shape({ users_count: PropTypes.string }),
  }).isRequired,
  horizontal: PropTypes.bool,
};

export default MeetupCard;
