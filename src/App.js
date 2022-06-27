import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styles from "./styles/main.module.css"
import { MainNavLinks } from "./components/navLinks";
import { Home } from "./pages/home";
import { Intro } from "./pages/introduction";
import GIT from "./pages/github";
import JS from "./pages/javascript";
import REACT from "./pages/react";
import { NodeJS, ScriptJS, ClassJS } from "./pages/javasDetail";

function App() {
  const divStyle = {
    position: "relative",
    top: "10px",
    margin: "30px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "30px",
  };
  return (
    <div className={styles.main}>
      <div style={divStyle}>
        <h1 style={{color: "#596c80"}}>Index</h1>
        <BrowserRouter>
          <MainNavLinks />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/intro" element={<Intro />} />
            <Route path="/git" element={<GIT />} />
            <Route path="/js" element={<JS />} />
            <Route path="/js/node" element={<NodeJS />} />
            <Route path="/js/script" element={<ScriptJS />} />
            <Route path="/js/class" element={<ClassJS />} />
            <Route path="/js/data" element={<NodeJS />} />
            <Route path="/js/levelup" element={<NodeJS />} />
            <Route path="/react" element={<REACT />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;