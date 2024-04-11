import styled from 'styled-components'
import { theme } from '../../../styles'
import { Text } from '../../common'
import { CheckButton } from '../CheckButton'
import { Link } from 'react-router-dom'
import { SERVER } from '../../../network/config'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userAccessToken, stressLevel } from '../../../store/recoil'

export const RecordButton = ({ link }: { link: string }) => {
  return (
    <Container to={link}>
      <CheckButton type="plus" />
      <Text $paletteColor="Gray5" $Typo="Body1">
        기록하기
      </Text>
    </Container>
  )
}

export const RecordStress = ({ display, setOpenStress }: { display: boolean; setOpenStress: (value: boolean) => void }) => {
  const accessToken = useRecoilValue(userAccessToken)
  const [stress, setStress] = useRecoilState(stressLevel)

  const stressLevelArray = [1, 2, 3, 4, 5]

  const postStressLevel = (level: number) => {
    fetch(`${SERVER}/records/stress`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        stress: level
      })
    })
      .then(() => setStress(level))
      .catch(error => console.error('Error:', error))
  }

  return (
    <StressContainer display={display}>
      <Text $Typo="Body4" $paletteColor="Gray7">
        오늘의 스트레스 정도는?
      </Text>
      <div className="icon-container">
        {stressLevelArray.map(level => (
          <img
            onClick={() => {
              postStressLevel(level)
              setOpenStress(false)
            }}
            src={level ? `/stress/level${level}.png` : 'stress/level3.png'}
            alt="stressEmoji"
            style={{ width: '44px' }}
          />

          /* <Icon
            onClick={() => {
              postStressLevel(level);
              setStress(level);
              setOpenStress(false);
            }}
          >
            {level}
          </Icon>*/
        ))}
      </div>
    </StressContainer>
  )
}

const Container = styled(Link)`
  width: 100%;
  background: ${theme.palette.White};
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
`

const StressContainer = styled.div<{ display: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  padding: 10px 15px;
  display: ${({ display }) => (display ? 'block' : 'none')};

  .icon-container {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
  }
`

// const Icon = styled.div`
//   width: 44px;
//   height: 44px;
//   background: pink;
// `
