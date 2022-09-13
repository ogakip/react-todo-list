import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Welcome } from "../pages/welcome";
import { WelcomeBack } from "../pages/welcomeBack";

export const AppRoutes = () => {
  const knownUser = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        {knownUser ? (
          <>
            <Route path="/" element={<Welcome />} />
          </>
        ) : (
          <>
            <Route path="/" element={<WelcomeBack />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
