import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Logo = styled.Text`
  color: ${colors.primary};
  font-size: 48px;
  font-weight: 500;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 30px;
`;
