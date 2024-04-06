import { styled } from "styled-components";
import { theme } from "../../styles";

export const DefactionColor = ({
  color,
  onClick,
  active,
}: {
  color: string;
  onClick: any;
  active: boolean;
}) => {
  return (
    <ColorConatiner color={color} onClick={onClick} active={active}>
      <div className="color-circle" />
    </ColorConatiner>
  );
};

const ColorConatiner = styled.div<{ color: string; active: boolean }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: ${({ active }) =>
    active ? `2px solid ${theme.palette.Main_orange}` : "none"};
  box-shadow: 0 0 0 10px ${theme.palette.White};
  display: flex;
  justify-content: center;
  align-items: center;

  .color-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({ color }) => (color ? color : theme.palette.Black)};
  }
`;
