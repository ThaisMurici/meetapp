import styled from 'styled-components/native';
import { colors } from '~/styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  padding: 30px 20px;
`;

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.lighterWhiteTransparent};
  border-radius: 4px;
  height: 35px;
  padding: 0px 10px;
  margin-bottom: 20px;
`;

export const SearchIcon = styled(Icon)`
  color: ${colors.darkerWhiteTransparent};
  margin-right: 10px;
`;

export const SearchText = styled.TextInput`
  font-size: 16px;
  color: ${colors.darkerWhiteTransparent};
`;

export const EmptyStateContainer = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const EmptyStateText = styled.Text`
  font-size: 14px;
  color: ${colors.whiteTransparent};
`;
