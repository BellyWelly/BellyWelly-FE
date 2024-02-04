import { styled } from "styled-components";
import { theme } from "../../styles";
import { Text } from "../common";

export enum ChipType {
  Hashtag = "Hashtag",
  Status = "Status",
}
export enum ColorType {
  MainOrange = "MainOrange",
  SubOrange = "SubOrange",
  Gray = "Gray",
}
export enum StatusType {
  Good = "GOOD",
  Soso = "SOSO",
  Bad = "BAD",
}

export const HashtagChips = ({
  children,
  color,
  onClick,
}: {
  children: React.ReactNode;
  color: ColorType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  let backgroundColor = "#000";
  if (color === ColorType.MainOrange)
    backgroundColor = theme.palette.Main_orange;
  else if (color === ColorType.SubOrange) backgroundColor = theme.palette.Gray1;
  else backgroundColor = theme.palette.Gray1;

  return (
    <Container
      background={backgroundColor}
      type={ChipType.Hashtag}
      color={color}
      onClick={onClick}
    >
      <Text
        $paletteColor={
          color === ColorType.MainOrange
            ? "White"
            : color === ColorType.SubOrange
            ? "Main_orange"
            : "Gray9"
        }
        $Typo="Body4"
      >
        {children}
      </Text>
    </Container>
  );
};

export const StatusChips = ({ statusType }: { statusType: StatusType }) => {
  let backgroundColor = "#000";

  if (statusType === StatusType.Good) backgroundColor = theme.palette.Blue2;
  else if (statusType === StatusType.Soso)
    backgroundColor = theme.palette.Gray3;
  else if (statusType === StatusType.Bad) backgroundColor = theme.palette.Red2;

  return (
    <Container background={backgroundColor} statusType={statusType}>
      <Text
        $Typo="Body1"
        $paletteColor={
          statusType === StatusType.Bad
            ? "Red"
            : statusType === StatusType.Soso
            ? "Gray6"
            : "Blue"
        }
      >
        {statusType}
      </Text>
    </Container>
  );
};

const Container = styled.div<{
  type?: ChipType;
  color?: ColorType;
  background: string;
  statusType?: StatusType;
}>`
  padding: ${({ type }) =>
    type === ChipType.Hashtag ? "8px 16px" : "5px 12px"};
  background: ${({ background }) => (background ? background : "#000")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ type }) => (type === ChipType.Hashtag ? 20 : 14)}px;
  border: ${({ color }) =>
    color === ColorType.SubOrange
      ? `1px solid ${theme.palette.Main_orange}`
      : `0px solid ${theme.palette.Main_orange}`};
`;
