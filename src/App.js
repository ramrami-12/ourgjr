import React from "react";
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
import { displayMode } from "./redux/actions";
import { useReduxState } from "./hooks/useReduxState";
import { useReduxDispatch } from "./hooks/useReduxDispatch";

function App() {
  const isDarkMode = useReduxState();
  const dispatch = useReduxDispatch();
  const changeMode = () => {
    dispatch(displayMode(!isDarkMode));
  };
  const mainStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: isDarkMode ? "black" : "#FFFFFF",
    color: isDarkMode ? "white" : "black",
    padding: "50px",
  };
  const textStyle = {
    color: isDarkMode ? "white" : "black",
  };
  const iconColor = isDarkMode ? "#FFE69A" : "#92B4EC";
  const IconText = isDarkMode ? "Turn Light Mode 👉🏻 " : "Turn Dark Mode 👉🏻 ";
  return (
    // <div className={styles.background}>
    <div style={mainStyle}>
      <div style={{ position: "absolute", right: "10%" }}>
        <span>{IconText}</span>
        <Button
          shape="circle"
          icon={<BulbTwoTone twoToneColor={iconColor}/>}
          onClick={changeMode}
          size="large"
        />
      </div>
      <h1 style={textStyle}>Index</h1>
      <p>{isDarkMode.toString()}</p>
      <p style={{ color: "white", fontSize: "10px" }}>다크모드는 개발 중~</p>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainNavLinks mode={isDarkMode} />
        <Divider />
        <Routes>
          <Route path="/" element={<Home />} />
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
    // </div>
  );
}

export default App;
