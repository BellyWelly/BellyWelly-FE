// Text 컴포넌트 정의
import styled from "styled-components";
import { theme } from "../../styles";

export const Text = styled.div<{
  $Typo?: keyof typeof theme.typo;
  $paletteColor?: keyof typeof theme.palette;
}>`
  ${({ $Typo }) => $Typo && theme.typo[$Typo]};
  color: ${({ $paletteColor }) =>
    $paletteColor && theme.palette[$paletteColor]};
  display: flex;
  align-items: center;
`;
