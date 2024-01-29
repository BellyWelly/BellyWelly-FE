// App.tsx
import { ThemeProvider, styled } from "styled-components";
import { theme } from "./styles";
import {
  BigButtons,
  PoopTypeButtons,
  CircleButtons,
} from "./components/Buttons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BigButtons enable={false}>분석하기</BigButtons>
        <BigButtons enable={true}>저장하기</BigButtons>
        <PoopTypeButtons id={3}></PoopTypeButtons>
        <CircleButtons type="check" />
        <CircleButtons type="plus" />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  padding: 3%;
  // box-sizing: border-box;
`;
