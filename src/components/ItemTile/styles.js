import styled from 'styled-components/native';

import Tile from '../Tile';

export const Container = styled(Tile)`
  margin: 10px 20px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  height: 25;
  width: 25;
  border-radius: 50px;
  background: #000;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.View`
  margin: 0 10px;
`;

export const TextInfo = styled.Text`
  font-weight: bold;
`;
