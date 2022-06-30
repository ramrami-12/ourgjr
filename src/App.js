import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainNavLinks } from "./components/navLinks";
import { Home } from "./pages/home";
import { Intro } from "./pages/introduction";
import GIT from "./pages/github";
import JS from "./pages/javascript";
import REACT from "./pages/react";
import { NodeJS, ScriptJS, ClassJS } from "./pages/javasDetail";
import { Button, Divider } from "antd";
import { BulbTwoTone } from "@ant-design/icons";
import { displayMode } from "./redux/actions";
import { useReduxState } from "./hooks/useReduxState";
import { useReduxDispatch } from "./hooks/useReduxDispatch";

function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();
  const [isDarkMode, setDarkMode] = useState(false);
  const [iconColor, setIconColor] = useState("#FAF4B7");
  const changeMode = () => {
    setDarkMode(!isDarkMode);
    isDarkMode ? setIconColor("#FFE69A") : setIconColor("#92B4EC");
    dispatch(displayMode(!state));
  };
  const mainStyle = {
    backgroundColor: isDarkMode ? "black" : "#FFFFFF",
    color: isDarkMode ? "white" : "black",
    width: "100%",
    height: "100%",
    padding: "50px",
  };
  const textStyle = {
    color: isDarkMode ? "white" : "black",
  };
  const IconText = isDarkMode ? "Light Mode 👉🏻 " : "Dark Mode 👉🏻 ";
  return (
    <div style={mainStyle}>
      <div style={{ position: "absolute", right: "10%" }}>
        <span>{IconText}</span>
        <Button
          shape="circle"
          icon={<BulbTwoTone twoToneColor={iconColor} />}
          onClick={changeMode}
          size="large"
        />
      </div>
      <h1 style={textStyle}>Index</h1>
      <p>{state.toString()}</p>
      <p style={{ color: "white", fontSize: "10px" }}>다크모드는 개발 중~</p>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainNavLinks mode={isDarkMode} />
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
    // </div>
  );
}

export default App;
