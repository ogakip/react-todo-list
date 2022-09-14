import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Page404 } from "../pages/404";
import { Welcome } from "../pages/welcome";
import { WelcomeBack } from "../pages/welcomeBack";

export const AppRoutes = () => {
  const knownUser = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <BrowserRouter>
      <Routes>
        {knownUser ? (
          <>
            <Route path="/" element={<WelcomeBack />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Welcome />} />
          </>
        )}
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
};
