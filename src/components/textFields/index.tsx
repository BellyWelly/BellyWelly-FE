import styled from 'styled-components'
import { theme } from '../../styles'
import { PlaneIcon } from '../../assets/Icons'
import useInput from '../../hooks/useInput'

export enum InputType {
  MenuInput = 'MenuInput',
  ChatInput = 'ChatInput'
}

export const TextFields = ({ value, type, enable }: { value?: string; type: InputType; enable?: boolean }) => {
  const { text, handleChange, resetText } = useInput('')
  let placeholder = 'placeholder'

  if (type === InputType.ChatInput) placeholder = 'AI에게 무엇이든 요청하세요.'
  else if (type === InputType.MenuInput) placeholder = '음식 입력'
  return (
    <Container type={type} enable={enable}>
      <input type="text" placeholder={placeholder} value={type === InputType.ChatInput ? text : value} onChange={handleChange} />
      {type === InputType.ChatInput ? <PlaneIcon /> : null}
    </Container>
  )
}

const Container = styled.div<{ type: InputType; enable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: ${({ type }) => (type === InputType.ChatInput ? 44 : 39)}px;
  border: ${({ type, enable }) => (type === InputType.MenuInput ? (enable ? `1px solid ${theme.palette.Main_orange}` : `1px solid ${theme.palette.Gray4}`) : '0px')};
  border-radius: ${({ type }) => (type === InputType.ChatInput ? 45 : 40)}px;
  padding: ${({ type }) => (type === InputType.ChatInput ? '0 24px' : '0 16px')};
  background: ${({ type }) => (type === InputType.ChatInput ? theme.palette.Gray1 : 'none')};

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
    color: ${({ enable }) => (enable ? theme.palette.Main_orange : theme.palette.Gray7)};
    background: ${({ type }) => (type === InputType.ChatInput ? theme.palette.Gray1 : 'none')};

    &::placeholder {
      color: ${({ type, enable }) => (type === InputType.MenuInput ? (enable ? theme.palette.Main_orange : theme.palette.Gray4) : theme.palette.Gray7)};
    }
  }
`
