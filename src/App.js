import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavLinks from "./components/NavLinks";
import Home from "./pages/home";
import Git from "./pages/github";
import JS from "./pages/javascript";
import REACT from "./pages/react";

function App() {
  return (
    <div>
      <h1>Index</h1>
      <BrowserRouter>
      <NavLinks />
      <Routes>
        <Route path="/react" element={<REACT />} />
        <Route path="/js" element={<JS />} />
        <Route path="/git" element={<Git />} />
        <Route path="/" exact component={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
