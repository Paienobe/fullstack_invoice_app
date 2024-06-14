import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Invoice from "./pages/Invoice/Invoice";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <main className="bg-light_bg h-screen font-Spartan">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:id" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
