import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '~/styles';

const { width } = Dimensions.get('window');

export const StyledImage = styled.Image`
  height: 210px;
  width: ${width};
`;

export const Container = styled.View`
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 5px;
`;

export const TinyText = styled.Text`
  font-size: 14px;
  color: ${colors.whiteTransparent};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${colors.darkerWhiteTransparent};
  line-height: 28px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const Address = styled.Text`
  font-size: 16px;
  color: ${colors.darkerWhiteTransparent};
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 60px;
`;
