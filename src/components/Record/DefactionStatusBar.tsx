import { styled } from "styled-components";
import { Column, theme } from "../../styles";
import { Text } from "../common";

const options = [
  { level: 1, text: "급하지않음" },
  { level: 2, text: "" },
  { level: 3, text: "" },
  { level: 4, text: "" },
  { level: 5, text: "급함" },
];

export const DefactionStatusBar = () => {
  return (
    <Bar>
      {options.map((option, index) => (
        <DotOption
          alignItems={index === 4 ? "flex-end" : "initial"}
          text={option.text}
        />
      ))}
    </Bar>
  );
};

export const DotOption = ({
  text,
  alignItems,
}: {
  text: string;
  alignItems: string;
}) => {
  return (
    <DotContainer alignItems={alignItems} gap={9}>
      <Dot />
      <Text $Typo="Body1" $paletteColor="Gray5">
        {text}
      </Text>
    </DotContainer>
  );
};

const Bar = styled.div`
  width: 100%;
  height: 6px;
  background: ${theme.palette.Gray2};
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Dot = styled.div`
  width: 13px;
  height: 13px;
  background: ${theme.palette.Gray2};
  border-radius: 50%;
  margin-top: -3.5px;
`;

const DotContainer = styled(Column)`
  height: fit-content;
  text-align: right;
`;
