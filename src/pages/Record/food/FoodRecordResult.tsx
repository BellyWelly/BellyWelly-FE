import { styled } from 'styled-components'
import { Row, theme } from '../../../styles'
import { Text } from '../../../components/common'
import { FoodListByFodmap, NutrientBox } from '../../../components/record'
import { StatusType } from '../../../components/chips'
import { BigButtons } from '../../../components/Buttons'
import { foodLabelsAnalysisResult } from '../../../store/recoil'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'

export const FoodRecordResult = ({ imageSrc }: { imageSrc: string }) => {
  const foodResults = useRecoilValue(foodLabelsAnalysisResult)
  const navigate = useNavigate()

  const foodList = [
    {
      fodmap: '저포드맵',
      foodList: foodResults.fodmapList.lowFodmap,
      status: StatusType.Low_Fodmap
    },
    {
      fodmap: '고포드맵',
      foodList: foodResults.fodmapList.highFodmap,
      status: StatusType.High_Fodmap
    }
  ]

  return (
    <Container>
      <Text $Typo="Title1" $paletteColor="Gray6">
        분석 결과
      </Text>
      <Row gap={8}>
        {foodList.map(food => (
          <FoodListByFodmap key={food.status} statusType={food.status} foodList={food.foodList} />
        ))}
      </Row>
      <NutrientBox nutrientList={foodResults.nutrient} />
      {imageSrc !== undefined && (
        <div
          className="button"
          onClick={() => {
            alert('저장되었습니다')
            navigate('/')
          }}>
          <BigButtons active={true}>저장하기</BigButtons>
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${theme.palette.BG_orange};
  border-top: 0.5px solid ${theme.palette.Gray4};
  display: flex;
  flex-direction: column;
  padding: 22px 3%;
  gap: 19px;

  .button {
    margin-top: 34px;
  }
`
