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

export const TitleContainer = styled.View``;

export const Subtitle = styled.Text`
  font-size: 10px;
  color: #000;
`;

export const UseName = styled.Text`
  font-size: 30px;
  color: #000;
`;

export const ContentHeaderContainer = styled.View`
  padding: 10px 0 10px 0;
  flex-direction: row;
`;

export const ContentHeader = styled.View`
  margin-right: 10px;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`;

export const ContentNumber = styled.Text`
  font-size: 28px;
  margin-right: 10px;
  font-weight: bold;
  color: #000;
`;

export const ContentText = styled.Text`
  font-size: 12px;
`;

export const AddButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 80px;
  background: #000;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: 20px;
`;

export const RecentOrdersHeader = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TitleContent = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const IndicatorContainer = styled.View`
  margin-right: 15px;
  align-items: center;
  justify-content: flex-start;
`;

export const IdicatorIconContainer = styled.View`
  height: 55px;
  width: 55px;
  border-radius: 120px;
  background: #000;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
`;

export const IndicatorText = styled.Text`
  font-size: 12px;
`;

export const RoudedButton = styled.TouchableOpacity`
  height: 55px;
  width: 100px;
  border-radius: 60px;
  background: #000;
  align-items: center;
  justify-content: center;
`;

export const RoudedButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const RecentOrders = styled.View``;

export const OrdersList = styled.View``;
