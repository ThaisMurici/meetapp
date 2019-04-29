import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.ScrollView`
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: ${colors.white};
  margin-bottom: 20px;
`;
