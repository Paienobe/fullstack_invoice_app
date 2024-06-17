import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Invoice from "./pages/Invoice/Invoice";
import Header from "./components/Layout/Header/Header";
import { GlobalContextProvider } from "./context/Global/GlobalContext";
import InvoiceFormParent from "./components/InvoiceFormComponents/InvoiceFormParent/InvoiceFormParent";

function App() {
  return (
    <GlobalContextProvider>
      <main className="bg-light_bg text-primary_text_color min-h-screen font-Spartan">
        <BrowserRouter>
          <Header />
          <InvoiceFormParent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoice/:id" element={<Invoice />} />
          </Routes>
        </BrowserRouter>
      </main>
    </GlobalContextProvider>
  );
}

export default App;
