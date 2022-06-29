import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styles from "./styles/main.module.css";
import { MainNavLinks } from "./components/navLinks";
import { Home } from "./pages/home";
import { Intro } from "./pages/introduction";
import GIT from "./pages/github";
import JS from "./pages/javascript";
import REACT from "./pages/react";
import { NodeJS, ScriptJS, ClassJS } from "./pages/javasDetail";
import { Button, Divider } from "antd";
import { BulbTwoTone } from "@ant-design/icons";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [mainMode, setMainMode] = useState(styles.backgroundL);
  const [iconColor, setIconColor] = useState("#FFE69A");
  const onClickModeIcon = () => {
    setDarkMode(!isDarkMode);
    isDarkMode ? setIconColor("#FFE69A") : setIconColor("black");
    isDarkMode ? setMainMode(styles.mainL) : setMainMode(styles.mainD);
  };
  const modeStyle = {
    color : isDarkMode ? "white" : "black",
  }
  return (
    <div style={{ padding: 30 }}>
      <div className={mainMode}>
        <Button
          shape="circle"
          icon={<BulbTwoTone twoToneColor={iconColor} />}
          onClick={onClickModeIcon}
          size="large"
          style={{ position: "absolute", right: "10%" }}
        />
        <div style={modeStyle}>
          <h1 style={modeStyle}>Index</h1>
          <p style={{ color: "white", fontSize: "10px" }}>다크모드는 개발 중~</p>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MainNavLinks mode={isDarkMode}/>
            <Divider />
            <Routes>
              <Route path="/" element={<Home mode={isDarkMode} />} />
              <Route path="/intro" element={<Intro mode={isDarkMode} />} />
              <Route path="/git" element={<GIT mode={isDarkMode} />} />
              <Route path="/js" element={<JS mode={isDarkMode} />} />
              <Route path="/js/node" element={<NodeJS mode={isDarkMode} />} />
              <Route path="/js/script" element={<ScriptJS mode={isDarkMode} />} />
              <Route path="/js/class" element={<ClassJS mode={isDarkMode} />} />
              <Route path="/js/data" element={<NodeJS mode={isDarkMode} />} />
              <Route path="/js/levelup" element={<NodeJS mode={isDarkMode} />} />
              <Route path="/react" element={<REACT />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
