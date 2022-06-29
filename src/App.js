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
import { Button } from "antd";
import { BulbTwoTone } from "@ant-design/icons";
import { MyDivider } from "./components/styled-comonents";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [mainMode, setMainMode] = useState(styles.backgroundL);
  const [iconColor, setIconColor] = useState("#FFE69A");
  const onClickModeIcon = () => {
    setDarkMode(!isDarkMode);
    isDarkMode ? setIconColor("black") : setIconColor("#FFE69A");
    isDarkMode ? setMainMode(styles.mainL) : setMainMode(styles.mainD);
    console.log(isDarkMode);
  };
  return (
      <div style={{padding:30}}>
        <div className={mainMode}>
          <Button
            shape="circle"
            icon={<BulbTwoTone twoToneColor={iconColor} />}
            onClick={onClickModeIcon}
            size="large"
            style={{ position: "absolute", right: "10%" }}
          />
          <h1>Index</h1>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MainNavLinks />
            <MyDivider />
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
