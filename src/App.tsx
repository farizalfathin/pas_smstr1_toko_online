import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./context/Authentication";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Detail from "./pages/Detail";

function App() {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Detail />} />
      {!isAuth ? <Route path="/login" element={<Login />} /> : null}
    </Routes>
  );
}

export default App;
