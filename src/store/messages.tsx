export interface messageInterface {
  chatId: number
  senderId: number
  receiverId: number
  text: React.ReactElement | string
}

export const fisrtMessage: messageInterface = {
  chatId: 1,
  senderId: 0,
  receiverId: 1,
  text: (
    <span>
      안녕하세요. 웰리입니다 :) <br /> 아래에서 필요한 서비스를선택해주세요.
    </span>
  )
}

export const recommendDiet: messageInterface = {
  chatId: 2,
  senderId: 1,
  receiverId: 0,
  text: <span>식단 추천해줘 !</span>
}

export const chooseFood: messageInterface[] = [
  {
    chatId: 2,
    senderId: 1,
    receiverId: 0,
    text: <span>음식 골라줘 !</span>
  },
  {
    chatId: 2,
    senderId: 0,
    receiverId: 1,
    text: (
      <span>
        음식을 입력해주세요. <br /> 제가 음식을 골라드릴게요!
      </span>
    )
  },
  {
    chatId: 2,
    senderId: 0,
    receiverId: 1,
    text: (
      <span>
        음식을 한 줄로 입력해주세요. <br /> (ex. 마라탕, 닭강정, 쌈밥)
      </span>
    )
  }
]

export const messages: messageInterface[] = []
