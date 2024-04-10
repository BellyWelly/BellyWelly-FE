import { styled } from "styled-components";
import { Row, theme } from "../../styles";
import { Text } from "../common";

interface ValueInterface {
  value: number;
  graph: number;
}

export const NutrientRateBar = ({
  children,
  value,
}: {
  children: string;
  value: ValueInterface;
}) => {
  return (
    <Row gap={10} justifyContent="space-between" alignItems="center">
      <NutrientText $Typo="Body3" $paletteColor="Gray9">
        {children}
      </NutrientText>
      <RateBarContainer>
        <RateBar rate={value?.graph} />
      </RateBarContainer>
      <NutrientPercentage $Typo="Body2" $paletteColor="Main_orange">
        {value.value}g
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
const RateBarContainer = styled.div`
  width: 100%;
`;
const RateBar = styled.div<{ rate: number }>`
  // flex-grow: 1; /* 남은 공간을 모두 사용하여 바를 확장 */
  height: 8px;
  display: flex;
  justify-content: flex-start;
  background: ${theme.palette.Main_orange};
  width: ${({ rate }) => (rate ? `${rate}%` : "0%")};
  // background: ${({ rate, theme }) =>
    rate > 0
      ? `linear-gradient(to right, ${theme.palette.Main_orange} ${rate}%, ${theme.palette.White} ${rate}%)`
      : theme.palette.White};
  border-radius: 10px;
`;
const NutrientPercentage = styled(Text)`
  flex-shrink: 0;
  white-space: nowrap;
  width: 25px;
  display: flex;
  justify-content: flex-end;
`;
