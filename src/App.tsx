// App.tsx
import { ThemeProvider, styled } from "styled-components";
import { theme } from "./styles";
import {
  BigButtons,
  PoopTypeButtons,
  CircleButtons,
} from "./components/Buttons";
import {
  ColorType,
  HashtagChips,
  StatusChips,
  StatusType,
} from "./components/Chips";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* Buttons */}
        <BigButtons enable={false}>분석하기</BigButtons>
        <BigButtons enable={true}>저장하기</BigButtons>
        <PoopTypeButtons id={3}></PoopTypeButtons>
        <CircleButtons type="check" />
        <CircleButtons type="plus" />
        {/* chips */}
        <HashtagChips color={ColorType.MainOrange}>Button</HashtagChips>
        <HashtagChips color={ColorType.SubOrange}>Button</HashtagChips>
        <HashtagChips color={ColorType.Gray}>Button</HashtagChips>
        <StatusChips statusType={StatusType.Good} />
        <StatusChips statusType={StatusType.Soso} />
        <StatusChips statusType={StatusType.Bad} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  padding: 3%;
  // box-sizing: border-box;
`;
