import { styled } from "styled-components";
import { DropdwonArrowIcon, DropdwonIcon } from "../../assets/Icons";
import { Text } from "../common";
import { useState } from "react";
import { theme } from "../../styles";

interface DropdownBoxProps {
  display: boolean;
}

const week = ["1주차", "2주차", "3주차", "4주차"];

export const DropdownCalendar = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay((prevDisplay: boolean) => !prevDisplay);
  };

  return (
    <Container>
      <InnerContainer onClick={handleClick}>
        <DropdwonIcon />
        <Text $Typo="Title2" $paletteColor="Gray9">
          23.8.1주차
        </Text>
        <DropdwonArrowIcon />
      </InnerContainer>
      <DropdownBox display={display} />
    </Container>
  );
};

export const DropdownBox = ({ display }: DropdownBoxProps) => {
  return (
    <DropdownBoxContainer display={display}>
      {week.map((week) => (
        <DropdownText key={week}>
          <Text $Typo="Title2" $paletteColor="Gray9" key={week}>
            {week}
          </Text>
        </DropdownText>
      ))}
    </DropdownBoxContainer>
  );
};
const Container = styled.div`
  position: relative;
`;

const InnerContainer = styled.div`
  height: 27px;
  display: flex;
  gap: 10px;
`;

const DropdownBoxContainer = styled.div<DropdownBoxProps>`
  width: 139px;
  background: ${theme.palette.White};
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 12px;
  margin: 5px 0;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  opacity: ${({ display }) => (display ? "1" : "0")};
  visibility: ${({ display }) => (display ? "visible" : "hidden")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DropdownText = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  border-bottom: 1px solid ${theme.palette.Gray3};
  width: 90%;
`;
