import React from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

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
      <CustomIcon name="user" size={16} />
    </RightItem>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
