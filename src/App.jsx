import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import LoginPage from "./pages/Loginpage";
import UserPage from "./pages/UserPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import EditUserPage from "./pages/EditUserPage";
function App() {
  return (
    <BrowserRouter basename="/react-landing-page">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
