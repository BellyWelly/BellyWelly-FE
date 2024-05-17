import styled from 'styled-components'
import { palette } from '../../styles'
import { Text } from '../common'

export const ChatBubble = ({ children }: { children: React.ReactElement | string }) => {
  return (
    <Container>
      <CustomText $Typo="Body3" $paletteColor="Gray9">
        {children}
      </CustomText>
    </Container>
  )
}

const Container = styled.div`
  background: ${palette.White};
  border-radius: 12px;
  width: fit-content;
  max-width: 80%;
  padding: 16px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CustomText = styled(Text)`
  flex-direction: column;
  align-items: flex-start;
`
