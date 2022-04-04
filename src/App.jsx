import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
