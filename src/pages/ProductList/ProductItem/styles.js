import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  height: ${Dimensions.get('window').width * 0.5 - 20}px;
  width: ${Dimensions.get('window').width * 0.5 - 20}px;
  background: #000;
  margin: 5px 5px;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

export const SelectedCircle = styled.View`
  height: 18px;
  width: 18px;
  border: 2px solid #fff;
  border-radius: 50px;
`;
