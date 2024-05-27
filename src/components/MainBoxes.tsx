import { styled } from 'styled-components'
import { Column, Row, theme } from '../styles'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Text } from './common'
import { StatusChips, StatusType } from './chips'
import React from 'react'
import { CheckButton } from './Buttons/CheckButton'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { foodLabelsAnalysisResult, selectDate, userAccessToken, userNameState } from '../store/recoil'
import { DietInterface } from '../pages/Main'
import { useNavigate } from 'react-router-dom'
import { getDietDetails } from '../network/apis/dailyRecord'

interface GraphLabelInterface {
  children: React.ReactNode
  percentage: number
  color: string
}
interface DefecationInterface {
  children: React.ReactNode
  score: number
}

ChartJS.register(ArcElement, Tooltip, Legend)

export const DoughnutGraphLabel = ({ children, percentage, color }: GraphLabelInterface) => {
  return (
    <LabelContainer>
      <LabelBox color={color} />
      <Text $Typo="Body4" $paletteColor="Gray8">
        {children}
      </Text>
      <Text $Typo="Body4" $paletteColor="Main_orange">
        {percentage}
      </Text>
    </LabelContainer>
  )
}

export const MainGraphBox = ({ dailyDietData }: { dailyDietData: DietInterface }) => {
  const userName = useRecoilValue(userNameState)

  const data = {
    labels: ['저포드맵', '고포드맵'],
    datasets: [
      {
        label: '퍼센트',
        data: [dailyDietData.lowFodmapRatio, dailyDietData.highFodmapRatio],
        backgroundColor: ['#FC843E', '#FFDBC5'],
        cutout: '70%'
      }
    ]
  }
  const options: any = {
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
  return (
    <Container>
      <GraphContainer>
        <Doughnut data={data} options={options} width={112} height={112} />
      </GraphContainer>

      <Column gap={16}>
        <Column gap={3}>
          <Text $Typo="SubTitle1">{userName}님의 오늘 식단은</Text>
          <Row>
            <StatusChips statusType={dailyDietData?.comment === 'good' ? StatusType.Good : dailyDietData?.comment === 'soso' ? StatusType.Soso : StatusType.Bad} />
            <Text $Typo="SubTitle1"> &nbsp;입니다!</Text>
          </Row>
        </Column>

        <Column>
          <DoughnutGraphLabel percentage={dailyDietData?.lowFodmapRatio} color={theme.palette.Main_orange}>
            저포드맵
          </DoughnutGraphLabel>
          <DoughnutGraphLabel percentage={dailyDietData?.highFodmapRatio} color={theme.palette.Sub3_orange}>
            고포드맵
          </DoughnutGraphLabel>
        </Column>
      </Column>
    </Container>
  )
}

export const MainDietRecordCheckBox = ({ dailyDietData }: { dailyDietData: DietInterface }) => {
  const selectedDate = useRecoilValue(selectDate)
  const accessToken = useRecoilValue(userAccessToken)
  const setFoodResult = useSetRecoilState(foodLabelsAnalysisResult)

  const navigate = useNavigate()

  const getMealTimeDiet = (mealtimeId: number) => {
    navigate('/foodRecord')

    getDietDetails(selectedDate, accessToken, mealtimeId).then(res => {
      setFoodResult(res)
    })
  }

  const day = [
    { id: 1, time: '아침', check: dailyDietData?.hasBreakfast },
    { id: 2, time: '점심', check: dailyDietData?.hasLunch },
    { id: 3, time: '저녁', check: dailyDietData?.hasDinner },
    { id: 4, time: '기타', check: dailyDietData?.hasOther }
  ]

  return (
    <Container padding="25px 31px 19px 31px" justifyContent="space-between">
      {day.map((record, index) => (
        <Column key={record.id} justifyContent="center" alignItems="center" gap={12} onClick={() => getMealTimeDiet(record.id)}>
          <Row alignItems="center" className="check-container">
            <CheckButton type={record.check ? 'check' : 'plus'} />
            {index !== day.length - 1 && <Line />}
          </Row>
          <Text $Typo={record.check ? 'Body2' : 'Body1'} $paletteColor={record.check ? 'Main_orange' : 'Gray5'}>
            {record.time}
          </Text>
        </Column>
      ))}
    </Container>
  )
}

export const MainTodayDietBoxes = ({ dailyDietData }: { dailyDietData: DietInterface }) => {
  return (
    <Column gap={10}>
      <MainGraphBox dailyDietData={dailyDietData} />
      <MainDietRecordCheckBox dailyDietData={dailyDietData} />
    </Column>
  )
}

export const DefecationBox = ({ children, score }: DefecationInterface) => {
  return (
    <Container gap="6px">
      <Text $Typo="SubTitle1" $paletteColor="Gray8">
        {children}
      </Text>
      <Text $Typo="SubTitle1" $paletteColor="Main_orange">
        {score}
      </Text>
    </Container>
  )
}

const Container = styled.div<{
  padding?: string
  justifyContent?: string
  gap?: string
}>`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : '16px 22px')};
  background: ${theme.palette.White};
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  display: flex;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'initial')};
  gap: ${({ gap }) => (gap ? gap : '8%')};

  .check-container {
    position: relative;
  }
`

const GraphContainer = styled.div`
  width: 112px;
  height: 112px;
  overflow: hidden;
`

const LabelContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const LabelBox = styled.div<{ color?: string }>`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background: ${({ color }) => (color ? color : theme.palette.Black)};
`
const Line = styled.div`
  width: 100px;
  height: 2px;
  background: ${theme.palette.Gray2};
  position: absolute;
`
