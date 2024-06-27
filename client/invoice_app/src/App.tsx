import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Invoice from "./pages/Invoice/Invoice";
import Header from "./components/Layout/Header/Header";
import InvoiceFormParent from "./components/InvoiceFormComponents/InvoiceFormParent/InvoiceFormParent";
import { useGlobalContext } from "./context/Global/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/Login/LoginPage";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const { showForm } = useGlobalContext();
  return (
    <main className="bg-light_bg dark:bg-dark_bg text-primary_text_color min-h-screen font-Spartan">
      <Header />
      {showForm && <InvoiceFormParent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <ToastContainer bodyClassName={"font-Spartan"} />
    </main>
  );
}

export default App;
