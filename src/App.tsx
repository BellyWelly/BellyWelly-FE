// App.tsx
import { ThemeProvider, styled } from "styled-components";
import { theme } from "./styles";
import { Route, Routes } from "react-router-dom";
import { Onboarding } from "./pages/Onboarding/Onboarding";
import { Main } from "./pages/Main";
import { FoodRecord, StoolRecord } from "./pages/Record";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/onBoarding" element={<Onboarding />} />
        <Route path="/foodRecord" element={<FoodRecord />} />
        <Route path="/stoolRecord" element={<StoolRecord />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
