import { styled } from "styled-components";
import { theme } from "../../styles";
import { Text } from "../common";

export const BigButtons = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick?: any;
}) => {
  return (
    <Container active={active} onClick={onClick}>
      <Text $Typo="SubTitle1" $paletteColor="White">
        {children}
      </Text>
    </Container>
  );
};

const Container = styled.div<{ active: boolean }>`
  width: 100%;
  height: 54px;
  background: ${({ active }) =>
    active ? theme.palette.Main_orange : theme.palette.Gray4};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
