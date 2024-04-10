import { styled } from "styled-components";
import { Row } from "../../styles";
import { Text } from "../common";

export const NutrientRateBar = ({
  children,
  rate,
}: {
  children: string;
  rate: number;
}) => {
  return (
    <Row gap={10} justifyContent="space-between" alignItems="center">
      <NutrientText $Typo="Body3" $paletteColor="Gray9">
        {children}
      </NutrientText>
      <RateBar rate={rate} />
      <NutrientPercentage $Typo="Body2" $paletteColor="Main_orange">
        {rate.toFixed(0)}%
      </NutrientPercentage>
    </Row>
  );
};

// Text 컴포넌트 확장
const NutrientText = styled(Text)`
  flex-shrink: 0; /* 레이블의 크기를 고정 */
  white-space: nowrap; /* 레이블의 텍스트가 줄바꿈되지 않도록 함 */
  width: 49px;
`;

const RateBar = styled.div<{ rate: number }>`
  flex-grow: 1; /* 남은 공간을 모두 사용하여 바를 확장 */
  height: 8px;
  background: ${({ rate, theme }) =>
    rate > 0
      ? `linear-gradient(to right, ${theme.palette.Main_orange} ${rate}%, ${theme.palette.Gray2} ${rate}%)`
      : theme.palette.Gray2};
  border-radius: 10px;
`;
const NutrientPercentage = styled(Text)`
  flex-shrink: 0;
  white-space: nowrap;
  width: 25px;
`;
