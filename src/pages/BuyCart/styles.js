import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 8px;
`;

export const PageCard = styled.View`
  background: #fff;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  margin-top: 15px;
  margin-left: 15px;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  width: 100%;
`;

export const TitleContainer = styled.View`
  padding: 8px;
  padding-left: 20px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const FinishPurchaseButton = styled.TouchableOpacity`
  background: #000;
  width: 100%;
  margin-top: 10px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const FinishPurchaseText = styled.Text`
  color: #fff;
`;
