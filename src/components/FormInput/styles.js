import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  margin-bottom: 40px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.whiteTransparent,
})`
  height: 24px;
  color: ${colors.light};
  font-size: 20px;
`;
