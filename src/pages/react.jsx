import { LiP } from "../components/indentComponents";
import { Divider } from "antd";
// import { usePageWidth } from "../hooks/usePageWidth";

export default function React() {
  return (
    <div>
      <h2>React💪🏻</h2>
      <h4>React - Basic Terminologies + Content Delivery Network (CDN) Basics</h4>
      <Divider />
      <ul>
        <LiP content={"Testing git merge"} />
        <LiP content={"React - Basic Terminology"} className={"list-triangle"}></LiP>
        <LiP content={"Creating React Component (1)"} className={"list-triangle"}></LiP>
        <LiP content={"Creating React Component (2)"} className={"list-triangle"}></LiP>
      </ul>
    </div>
    
  );
}
