import { styled } from "styled-components";
import { Column, theme } from "../../styles";
import { Text } from "../common";
import { BottomNavInfo } from "../../assets/info/BottomNav";

export const BottomNav = () => {
  return (
    <Container>
      {BottomNavInfo.map((item, index) => (
        <Column alignItems="center" gap={5}>
          {item.icon}
          <Text $paletteColor="Gray4" $Typo="Body1">
            {item.menu}
          </Text>
        </Column>
      ))}
    </Container>
  );
};
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  background: ${theme.palette.White};
  border-radius: 100px;
  padding: 10px 44px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.07);

  display: flex;
  justify-content: space-between;
`;
