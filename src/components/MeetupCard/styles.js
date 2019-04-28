import styled from 'styled-components/native';
import { colors } from '~/styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  border-radius: 4px;
  margin-right: 20px;
  overflow: hidden;
`;

export const ImageContainer = styled.View`
  height: 130px;
  width: 270px;
  background-color: ${colors.light};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const StyledImage = styled.Image`
  height: 130px;
  width: 270px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  background-color: ${colors.white};
  padding: 20px;
`;

export const TextContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.darker};
`;

export const LightText = styled.Text`
  font-size: 14px;
  color: ${colors.regular};
  margin-top: 5px;
`;

export const DetailsIconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${colors.primary};
  margin-left: 15px;
`;

export const DetailsIcon = styled(Icon)`
  color: ${colors.white};
`;
