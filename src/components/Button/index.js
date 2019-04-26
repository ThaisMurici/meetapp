import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

const Button = ({ children, onPress }) => (
  <Container onPress={onPress}>
    <Text>{children}</Text>
  </Container>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
