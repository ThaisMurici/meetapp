import React from 'react';

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

const MeetupCard = ({ item }) => (
  <Container>
    <ImageContainer>
      <StyledImage
        source={{ uri: 'http://www.thesecretcabal.com/portals/0/Site%20Images/Meetup1.jpg' }}
      />
    </ImageContainer>
    <InfoContainer>
      <TextContainer>
        <Title>{item.title}</Title>
        <LightText>{`${item.__meta__.users_count} membro(s)`}</LightText>
      </TextContainer>
      <DetailsIconContainer>
        <DetailsIcon name="chevron-right" size={14} />
      </DetailsIconContainer>
    </InfoContainer>
  </Container>
);

export default MeetupCard;
