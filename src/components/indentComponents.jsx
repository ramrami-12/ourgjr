export const SmallDetails = (props) => {
  if (!Array.isArray(props.contents)) {
    return <ul>Input Array</ul>
  }

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
    <li className={props.className}>
      <p>{props.content}</p>
    </li>
  );
};
