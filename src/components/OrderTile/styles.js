import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const PrefixContainer = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  background: #000;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  margin-left: 15px;
  flex: 1;
`;

export const SuffixContainer = styled.View``;

export const ContentTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const ContentSubTitle = styled.Text`
  font-size: 12px;
  color: #cacaca;
`;
