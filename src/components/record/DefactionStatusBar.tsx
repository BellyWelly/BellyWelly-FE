import { styled } from "styled-components";
import { Column, theme } from "../../styles";
import { Text } from "../common";

interface optionsInterface {
  level: number;
  text: string;
}
interface dotOptionInterface {
  text: string;
  alignItems: string;
  active: string;
  onClick: any;
}
interface defactionStatusBarInterface {
  options: optionsInterface[];
  currentIndex: number;
  setCurrentIndex: any;
}

export const DefactionStatusBar = ({
  options,
  currentIndex,
  setCurrentIndex,
}: defactionStatusBarInterface) => {
  return (
    <Container>
      <Bar rate={25 * currentIndex}>
        {options.map((option: optionsInterface, index) => (
          <DotOption
            key={index}
            alignItems={index === 4 ? "flex-end" : "initial"}
            onClick={() => setCurrentIndex(index)}
            text={option.text}
            active={
              index === currentIndex
                ? "active"
                : index < currentIndex
                ? "semi-active"
                : "none"
            }
          />
        ))}
      </Bar>
    </Container>
  );
};

export const DotOption = ({
  text,
  alignItems,
  active,
  onClick,
}: dotOptionInterface) => {
  return (
    <DotContainer alignItems={alignItems} gap={9} onClick={onClick}>
      <Dot active={active} />
      <TextContainer $Typo="Body1" $paletteColor="Gray5">
        {text}
      </TextContainer>
    </DotContainer>
  );
};

const Container = styled.div`
  height: 36px;
`;

const Bar = styled.div<{ rate: number }>`
  width: 100%;
  height: 6px;
  background: ${theme.palette.Gray2};
  position: relative;
  display: flex;
  justify-content: space-between;

  background: ${({ rate }) =>
    rate > 0
      ? `linear-gradient(to right, ${theme.palette.Main_orange} ${rate}%, ${theme.palette.Gray2} ${rate}%)`
      : theme.palette.Gray2};
`;

const Dot = styled.div<{ active?: string }>`
  width: ${({ active }) => (active === "active" ? 20 : 13)}px;
  height: ${({ active }) => (active === "active" ? 20 : 13)}px;
  background: ${({ active }) =>
    active === "none" ? theme.palette.Gray2 : theme.palette.Main_orange};

  border-radius: 50%;
  margin-top: ${({ active }) => (active === "active" ? -6 : -3.5)}px;
`;

const DotContainer = styled(Column)`
  height: fit-content;
  text-align: right;
`;

const TextContainer = styled(Text)`
  position: absolute;
  top: 18px;
`;
