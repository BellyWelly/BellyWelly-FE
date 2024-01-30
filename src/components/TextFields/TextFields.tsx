import styled from "styled-components";
import { theme } from "../../styles";

export enum InputType {
  MenuInput = "MenuInput",
  ChatInput = "ChatInput",
}

export const TextFields = ({
  type,
  enable,
}: {
  type: InputType;
  enable?: boolean;
}) => {
  let placeholder = "placeholder";
  if (type === InputType.ChatInput) placeholder = "AI에게 무엇이든 요청하세요";
  else if (type === InputType.MenuInput) placeholder = "음식 입력";
  return (
    <Container type={type} enable={enable}>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
};

const Container = styled.div<{ type: InputType; enable?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ type }) => (type === InputType.ChatInput ? 44 : 39)}px;
  border: ${({ enable }) =>
    enable
      ? `1px solid ${theme.palette.Main_orange}`
      : `1px solid ${theme.palette.Gray7}`};
  border-radius: ${({ type }) => (type === InputType.ChatInput ? 45 : 40)}px;
  display: flex;
  align-tiems: center;
  padding: ${({ type }) =>
    type === InputType.ChatInput ? "0 13px" : "0 10px"};

  input {
    width: 80%;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    outline: none;
    border: none;
    border-radius: 40px;
    color: ${({ enable }) =>
      enable ? theme.palette.Main_orange : theme.palette.Gray7};
  }
`;
