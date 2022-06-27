import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavLinks from "./components/NavLinks";
import { Home } from "./pages/home";
import { Intro } from "./pages/introduction";
import GIT from "./pages/github";
import JS from "./pages/javascript";
import REACT from "./pages/react";
import { NodeJS } from "./pages/nodejs";
import ScriptJS from "./pages/scriptjs";
import useWindowWidth from "./hooks/useWindowWidth";
import useWindowHeight from "./hooks/useWindowHeight";

function App() {
  const width = useWindowWidth;
  const height = useWindowHeight;

  const mainStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F2D7D9",
    fontFamily: "Nanum Gothic",
  };
  const divStyle = {
    position: "relative",
    top: "10px",
    width: width - 100,
    height: height - 50,
    margin: "20px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "30px",
  };
  return (
    <div style={mainStyle}>
      <div style={divStyle}>
        <h1>Index</h1>
        <BrowserRouter>
          <NavLinks />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/intro" element={<Intro />} />
            <Route path="/git" element={<GIT />} />
            <Route path="/js" element={<JS />} />
            <Route path="/js/node" element={<NodeJS />} />
            <Route path="/js/script" element={<ScriptJS />} />
            <Route path="/js/class" element={<NodeJS />} />
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
