import styled from 'styled-components'
import { ChatBubble } from '../../components/chat/ChatBubble'
import { palette } from '../../styles'
import { Text } from '../../components/common'
import { chooseFood, fisrtMessage, recommendDiet } from '../../store/messages'
import { useRecoilState, useRecoilValue } from 'recoil'
import { chatList, isChatPageActive, userAccessToken } from '../../store/recoil'
import { useEffect, useRef, useState } from 'react'
import { SERVER } from '../../network/config'

export const Chatting = () => {
  const [chatting, setChatting] = useRecoilState(chatList)
  const accessToken = useRecoilValue(userAccessToken)
  const isInChatPage = useRecoilValue(isChatPageActive)
  const [answer, setAnswer] = useState('')

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  useEffect(() => {
    if (isInChatPage && chatting.at(-1) !== fisrtMessage) setChatting(prevChatting => [...prevChatting, fisrtMessage])
  }, [isInChatPage])

  useEffect(() => {
    scrollBottom()
  }, [chatting])

  const getRecommendationsResult = async () => {
    await fetch(`${SERVER}/recommendations`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(res =>
        setChatting(prevChatting => [
          ...prevChatting,
          {
            chatId: 12654,
            senderId: 0,
            receiverId: 1,
            text: res.data[0].split('\n').map((content: string) => <span>{content}</span>)
          }
        ])
      )
  }

  const addChooseFoodChat = () => {
    setChatting(prevChatting => [...prevChatting, chooseFood[0]])

    chooseFood.slice(1).forEach((message, index) => {
      setTimeout(() => {
        setChatting(prevChatting => [...prevChatting, message])
      }, (index + 1) * 500) // 0.5초 간격
    })
  }

  return (
    <Container ref={scrollRef}>
      {chatting.map(message => (
        <ChatBubbleList chatId={message.chatId} senderId={message.senderId}>
          <ChatBubble>{message.text}</ChatBubble>
          {message.chatId === 1 && (
            <div className="chatChips_container">
              <ChatChip
                onClick={() => {
                  setChatting([...chatting, recommendDiet])
                  getRecommendationsResult()
                }}>
                <Text $Typo="Body3" $paletteColor="Main_orange">
                  식단 추천
                </Text>
              </ChatChip>
              <ChatChip onClick={() => addChooseFoodChat()}>
                <Text $Typo="Body3" $paletteColor="Main_orange">
                  음식 골라주기
                </Text>
              </ChatChip>
            </div>
          )}
        </ChatBubbleList>
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 18px 0 0 0;
  height: calc(100vh - 345px);

  .chatChips_container {
    display: flex;
    gap: 8px;
  }
`

const ChatBubbleList = styled.div<{ chatId?: number; senderId: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ chatId }) => (chatId === 1 ? 10 : 30)}px;
  align-items: ${({ senderId }) => (senderId === 1 ? 'flex-end' : 'flex-start')};
`

const ChatChip = styled.button`
  width: fit-content;
  background: ${palette.White};
  border-radius: 20px;
  border: 1px solid ${palette.Main_orange};
  padding: 8px 16px;
`
