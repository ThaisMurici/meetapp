import React from 'react';
import { PropTypes } from 'prop-types';

import { Background } from './styles';

const SignIn = ({ children }) => (
  <Background colors={['#22202b', '#28212b']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
    {children}
  </Background>
);

SignIn.defaultProps = {
  children: null,
};

SignIn.propTypes = {
  children: PropTypes.node,
};

export default SignIn;
