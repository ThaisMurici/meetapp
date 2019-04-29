import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.ScrollView`
  padding-left: 20px;
`;

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const EmptyStateContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyStateText = styled.Text`
  font-size: 14px;
  color: ${colors.whiteTransparent};
`;
