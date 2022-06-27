import { useParams } from "react-router-dom";

export const SmallDetails = (props) => {
  console.log(props);

  return (
    <ul>
      {props.contents.map((content, index) => {
        return <li key={index}>{content}</li>;
      })}
    </ul>
  );
};

export const LiP = (props) => {
  return (
    <li>
      <p>{props.content}</p>
    </li>
  );
};
