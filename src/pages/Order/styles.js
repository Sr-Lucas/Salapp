import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 10px;
  background-color: #fafafa;
`;

export const PageCard = styled.View`
  background: #fff;
  padding: 10px;
  margin-bottom: 15px;
`;

export const TitleTile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  height: 28px;
  width: 28px;
  border-radius: 80px;
  background: #000;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 8px;
  color: #000;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const OrderCode = styled.Text`
  font-size: 38px;
  margin-top: 5px;
  margin-bottom: 4px;
  color: #000;
  font-weight: 600;
`;

export const OrderDateCreation = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 200;
  margin-bottom: 3px;
`;

export const OrderClient = styled.Text`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.2);
  font-weight: 200;
  margin-bottom: 8px;
`;

export const PageTitleContainer = styled.View`
  height: 50px;
  padding: 10px 25px;
  max-width: 50%;
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.Text`
  font-size: 18px;
  margin-left: 8px;
  color: #fff;
`;

export const InfoContentText = styled.Text`
  font-size: 24px;
`;
