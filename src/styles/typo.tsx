//typo.tsx
import { css } from "styled-components";

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Head1: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(28)};
    line-height: 140%;
  `,
  Head2: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(24)};
    line-height: 140%;
  `,
  Title1: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(20)};
    line-height: 140%;
  `,
  Title2: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(18)};
    line-height: 140%;
  `,
  SubTitle1: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(16)};
    line-height: 140%;
  `,
  SubTitle2: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 400;
    font-size: ${calcRem(16)};
    line-height: 140%;
  `,
  Body4: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(14)};
    line-height: 140%;
  `,
  Body3: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 400;
    font-size: ${calcRem(14)};
    line-height: 140%;
  `,
  Body2: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(12)};
    line-height: 140%;
  `,
  Body1: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 400;
    font-size: ${calcRem(12)};
    line-height: 140%;
  `,
  Caption: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 400;
    font-size: ${calcRem(10)};
    line-height: 140%;
  `,
} as const;
