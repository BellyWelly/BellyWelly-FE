import styled from 'styled-components'
import { theme } from '../../../styles'
import { Text } from '../../common'
import { PlusIcon } from '../../../assets/Icons'

export const RecordButton = () => {
  return (
    <Container>
      <PlusIcon />
      <Text $paletteColor="Gray5" $Typo="Body1">
        기록하기
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
