// App.tsx
import { ThemeProvider, styled } from "styled-components";
import { theme } from "./styles";
import { Route, Routes } from "react-router-dom";
import { Onboarding } from "./pages/Onboarding/Onboarding";
import { Main } from "./pages/Main/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/onBoarding" element={<Onboarding />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  padding: 3%;
  // box-sizing: border-box;
`;
