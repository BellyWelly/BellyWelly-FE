import { styled } from "styled-components";
import {
  PoopType1,
  PoopType2,
  PoopType3,
  PoopType4,
} from "../../assets/PoopTypeIcons/Types";
import { Text } from "../common";
import { theme } from "../../styles";
import React from "react";

interface PoopTypesInterface {
  id: number;
  description: string;
  icon: React.ReactElement;
}

const PoopTypes: PoopTypesInterface[] = [
  {
    id: 1,
    description: "촉촉한 변",
    icon: <PoopType1 width={50} height={34} />,
  },
  {
    id: 2,
    description: "딱딱한 변",
    icon: <PoopType2 width={50} height={34} />,
  },
  {
    id: 3,
    description: "갈라진 변",
    icon: <PoopType3 width={50} height={34} />,
  },
  {
    id: 4,
    description: "물 같은 변",
    icon: <PoopType4 width={50} height={34} />,
  },
];

export const PoopTypeButtons = ({ id }: { id: number }) => {
  return (
    <ButtonsContainer>
      {PoopTypes.map((type: PoopTypesInterface) => (
        <Container enable={id === type.id ? true : false}>
          {React.cloneElement(type.icon, { enable: id === type.id })}
          <Text
            $Typo="Body2"
            $paletteColor={id === type.id ? "Main_orange" : "Gray5"}
          >
            {type.description}
          </Text>
        </Container>
      ))}
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Container = styled.div<{ enable: boolean }>`
  width: 76px;
  height: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ enable }) =>
    enable ? theme.palette.Sub4_orange : theme.palette.Gray2};
  border-radius: 8px;
  border: 1px solid
    ${({ enable }) =>
      enable ? theme.palette.Main_orange : theme.palette.Gray4};
  gap: 7px;
`;
