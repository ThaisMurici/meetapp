import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

const TextButton = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextButton;
