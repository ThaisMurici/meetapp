import React from 'react';
import { PropTypes } from 'prop-types';

import { Container, Label, Input } from './styles';

const FormInput = ({
  label, placeholder, value, onChangeText, secureTextEntry,
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
      secureTextEntry={secureTextEntry}
    />
  </Container>
);

FormInput.defaultProps = {
  onChangeText: () => {},
  secureTextEntry: false,
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  value: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
};

export default FormInput;
