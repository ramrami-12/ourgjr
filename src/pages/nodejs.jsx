export function NodeJS() {
  const dividerSytle = {
    width: "100%",
    color: "gray",
    overflowY: "auto",
  };
  const SmallDetails = (props) => {
    return (
      <ul>
        {props.contents.map((content, index) => {
          return <li key={index}>{content}</li>;
        })}
      </ul>
    );
  };
  const LiP = (props) => {
    return (
      <li>
        <p>{props.content}</p>
      </li>
    );
  };
  const P = (props) => {
    const Style = { color: "gray" };
    return <p style={Style}>{props.content}</p>;
  };
  return (
    <div>
      <hr style={dividerSytle} />
      <ul>
        <LiP content={"Use nvm to change the node js versions."} />
        <P
          content={
            "npm init -y → creates initial node js (library?) files npm install parcel-bundler -D → Downloads and installs parcel bundler for node js"
          }
        />
        <LiP content={"inside the package.json"} />
        <P content={"You may delete the index.js line"} />
        <LiP
          content={
            "after parcel bundler installation: the node_module folder would be installed"
          }
        />
        <SmallDetails
          contents={[
            " within the parcel-bundler folder within the node_module you may find all the dependencies",
            " A devDependencies will be added to the package.json with parcel-bundler",
          ]}
        />
        <P
          content={
            "** After the dependencies information is added to the package.json, we can simply add all the packages using **npm install (or i)** ****Hence we can simply delete node_modules as it can be installed, But package.json cannot be deleted.**"
          }
        />
        <LiP
          content={
            "Although we maintain package.json, we do not maintain package-lock.json"
          }
        />
        <LiP
          content={
            "When installing using npm the -D or (—save-dev) is used for indicating development installation. Meaning the packages would only be used during development and not during deployment."
          }
        />
      </ul>
    </div>
  );
}
