import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import Rutas from "./routes/routes";
import Footer from "./components/footer";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <NavBar />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </StrictMode>
  )
}