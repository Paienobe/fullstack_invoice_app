import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Invoice from "./pages/Invoice/Invoice";
import Header from "./components/Layout/Header/Header";
import InvoiceFormParent from "./components/InvoiceFormComponents/InvoiceFormParent/InvoiceFormParent";
import { useGlobalContext } from "./context/Global/GlobalContext";

function App() {
  const { showForm } = useGlobalContext();
  return (
    <main className="bg-light_bg text-primary_text_color min-h-screen font-Spartan">
      <BrowserRouter>
        <Header />
        {showForm && <InvoiceFormParent />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:id" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
