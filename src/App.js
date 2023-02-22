//Route nos permite definir un ruta URL
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/**
         * cuando se visite el camino path me mostrara lo ue tiene element
        */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UserPage />} />
        {/*para todas las demas rutas saldra Not found */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
