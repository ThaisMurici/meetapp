import React from 'react';
import { PropTypes } from 'prop-types';

import { Container, Label, Input } from './styles';

const FormInput = ({
  label, placeholder, value, onChangeText,
}) => (
  <Container>
    <Label>{label}</Label>
    <Input
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  </Container>
);

FormInput.defaultProps = {
  onChangeText: () => {},
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default FormInput;
