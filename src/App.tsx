import { Routes, Route, Link } from "react-router-dom";
import FractalTree from "./FractalTree";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <>
      <nav
        style={{
          marginBottom: "1rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/" style={{ marginRight: "1rem" }}>
          Fractal Tree
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<FractalTree />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
