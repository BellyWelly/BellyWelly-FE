import styled from "styled-components";
import { ChatBubble } from "../../components/chat/ChatBubble";
import { palette } from "../../styles";
import { Text } from "../../components/common";

interface messageInterface {
  chatId: number;
  senderId: number;
  receiverId: number;
  text: React.ReactElement | string;
}

const fisrtMessage: messageInterface = {
  chatId: 1,
  senderId: 0,
  receiverId: 1,
  text: (
    <span>
      안녕하세요. 웰리입니다 :) <br /> 아래에서 필요한 서비스를선택해주세요.
    </span>
  ),
};

const messages: messageInterface[] = [
  fisrtMessage,
  {
    chatId: 2,
    senderId: 1,
    receiverId: 0,
    text: "학문관",
  },
  {
    chatId: 3,
    senderId: 0,
    receiverId: 1,
    text: "ㅇㅋ용~",
  },
];

export const Chatting = () => {
  return (
    <Container>
      {messages.map((message) => (
        <ChatBubbleList chatId={message.chatId} senderId={message.senderId}>
          <ChatBubble>{message.text}</ChatBubble>
          {message.chatId == 1 && (
            <div className="chatChips_container">
              <ChatChip>
                <Text $Typo="Body3" $paletteColor="Main_orange">
                  식단 추천
                </Text>
              </ChatChip>
              <ChatChip>
                <Text $Typo="Body3" $paletteColor="Main_orange">
                  음식 골라주기
                </Text>
              </ChatChip>
            </div>
          )}
        </ChatBubbleList>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 18px 0 0 0;
  height: calc(100vh - 345px);

  .chatChips_container {
    display: flex;
    gap: 8px;
  }
`;

const ChatBubbleList = styled.div<{ chatId?: number; senderId: number }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ chatId }) => (chatId === 1 ? 10 : 30)}px;
  align-items: ${({ senderId }) =>
    senderId === 1 ? "flex-end" : "flex-start"};
`;

const ChatChip = styled.button`
  width: fit-content;
  background: ${palette.White};
  border-radius: 20px;
  border: 1px solid ${palette.Main_orange};
  padding: 8px 16px;
`;
