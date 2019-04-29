import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { navigate } from '~/services/navigation';

import {
  Container, LeftItem, Title, RightItem, CustomIcon,
} from './styles';

const Header = ({ title }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <LeftItem>
      <CustomIcon name="door-open" size={16} />
    </LeftItem>
    <Title>{title}</Title>
    <RightItem>
      <CustomIcon name="user" size={16} onPress={() => navigate('Profile')} />
    </RightItem>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
