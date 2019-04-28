import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
`;

export const Greeting = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${colors.darkerWhiteTransparent};
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 28px;
  text-align: left;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: ${colors.white};
  margin-bottom: 20px;
`;
