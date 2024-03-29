// App.tsx
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { Route, Routes } from "react-router-dom";
import { Onboarding } from "./pages/Onboarding/Onboarding";
import { Main } from "./pages/Main";
import { DefecationRecord, FoodRecord } from "./pages/Record";
import { Report } from "./pages/Report";
import { AuthRedirect } from "./pages/auth/authRedirect";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/onBoarding" element={<Onboarding />} />
        <Route path="/foodRecord" element={<FoodRecord />} />
        <Route path="/defecationRecord" element={<DefecationRecord />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login/loading" element={<AuthRedirect />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
