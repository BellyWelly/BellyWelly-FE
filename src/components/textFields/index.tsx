import styled from 'styled-components'
import { theme } from '../../styles'
import { PlaneIcon } from '../../assets/Icons'
import useInput from '../../hooks/useInput'
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import { chatList, foodAIDetectionLabels, isChooseFoodActive, userAccessToken } from '../../store/recoil'
import { useEffect } from 'react'
import { postChatMsg } from '../../network/apis/fastApis/chat'

export enum InputType {
  MenuInput = 'MenuInput',
  ChatInput = 'ChatInput'
}

export const TextFields = ({ value, type, enable, index }: { value?: string; type: InputType; enable?: boolean; index?: number }) => {
  const { text, setText, handleChange, resetText } = useInput('')
  const setChatting = useSetRecoilState(chatList)
  const setChooseFoodActive = useSetRecoilState(isChooseFoodActive)
  const accessToken = useRecoilValue(userAccessToken)
  const [dietResult, setDietResult] = useRecoilState(foodAIDetectionLabels)

  let placeholder = 'placeholder'

  useEffect(() => {
    if (value) setText(value)
  }, [])

  const changeFoodLabels = (e: any) => {
    e.preventDefault()

    if (index !== undefined && index <= dietResult.length - 1) {
      const newLabels = [...dietResult]
      newLabels[index] = text
      setDietResult(newLabels)
    } else setDietResult(prev => [...prev, text])

    resetText()
  }

  const onFoodListSend = (e: any) => {
    setChooseFoodActive(true)
    e.preventDefault()
    setChatting(prevChatting => [
      ...prevChatting,
      {
        chatId: 12654,
        senderId: 1,
        receiverId: 0,
        text: text
      }
    ])
    resetText()

    postChatMsg(accessToken, text).then(res =>
      setChatting(prevChatting => [
        ...prevChatting,
        {
          chatId: 12654,
          senderId: 0,
          receiverId: 1,
          text: res.data
        }
      ])
    )
  }

  if (type === InputType.ChatInput) placeholder = ''
  else if (type === InputType.MenuInput) placeholder = '음식 입력'
  return (
    <Container type={type} enable={enable} onSubmit={type === InputType.ChatInput ? onFoodListSend : changeFoodLabels}>
      <input type="text" placeholder={placeholder} value={text} onChange={handleChange} />
      {type === InputType.ChatInput ? (
        <CustomBtn type="submit">
          <PlaneIcon />
        </CustomBtn>
      ) : (
        <button style={{ display: 'none' }} type="submit">
          {null}
        </button>
      )}
    </Container>
  )
}

const Container = styled.form<{ type: InputType; enable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: ${({ type }) => (type === InputType.ChatInput ? 44 : 39)}px;
  min-height: ${({ type }) => (type === InputType.ChatInput ? 44 : 39)}px;
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

const CustomBtn = styled.button`
  border: none;
  background: ${theme.palette.Gray1};
`
