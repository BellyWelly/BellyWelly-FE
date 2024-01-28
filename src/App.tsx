// App.tsx
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { Text } from "./components/common";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>테스트</div>
      <Text $Typo="Head2" $paletteColor="Main_orange">
        안녕앙년ㅇ
      </Text>
    </ThemeProvider>
  );
}

export default App;
