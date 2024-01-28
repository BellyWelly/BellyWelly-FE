// styled.d.ts
import "styled-components";
import { TypeOfPalette, TypeOfTypo } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: TypeOfPalette;
    typo: TypeOfTypo;
  }
}
