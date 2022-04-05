import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Nav from "./components/Nav";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <CartProvider>
      <Nav />

        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
        
      </CartProvider>
    </>
  );
}

export default App;
