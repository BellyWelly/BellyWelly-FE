import { styled } from "styled-components";

export const Column = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
`;

export const Row = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
`;
