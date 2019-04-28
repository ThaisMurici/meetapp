import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors } from '~/styles';

export const Container = styled.View`
  height: ${getStatusBarHeight() + 60}px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  padding-right: 30px;
  padding-left: 30px;
`;

export const LeftItem = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`;

export const RightItem = styled.TouchableOpacity``;

export const CustomIcon = styled(Icon)`
  color: ${colors.white};
`;
