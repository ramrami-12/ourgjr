import { Divider } from "antd";
// import { CopyBlock } from "react-code-blocks";
import { MyCodeBlock } from "../components/codeblock";
import { SmallDetails, LiP } from "../components/indentComponents";
export function NodeJS() {
  return (
    <div style={{ width: "100%", overflowY: "scroll", overflowX: "hidden" }}>
      <h3>Node.JS</h3>
      <Divider />
      <ul>
        <LiP content={"Use nvm to change the node js versions."} />
        <MyCodeBlock
          code={
            "npm init -y 👉🏻 creates initial node js files(library)\nnpm install parcel-bundler -D 👉🏻 Downloads and installs parcel bundler for node js"
          }
          language={"text"}
        />
        <LiP content={"inside the package.json"} />
        <SmallDetails contents={["You may delete the index.js line"]} />
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
        <p>
          ** After the dependencies information is added to the package.json, we
          can simply add all the packages using npm install (or i)
        </p>
        <p style={{ fontWeight: "bold" }}>
          **Hence we can simply delete node_modules as it can be installed, But
          package.json cannot be deleted.
        </p>
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
        <p>
          Without -D it would simply be normal package installation. Packages
          would be used during deployment.
        </p>
        <MyCodeBlock
          code={"npm install -D parcel-bundler\nnpm install lodash"}
          language={"text"}
        />
        <LiP
          content={
            "Because we only installed parcel on our project, we cannot access it within our terminal. Hence add within the package.json"
          }
        />
        <MyCodeBlock
          code={'"scripts": {\n   "dev": "parcel index.html"\n},'}
          language={"json"}
        />
        <p>to run:</p>
        <MyCodeBlock code={"npm run dev"} language={"text"} />
        <LiP content={"When building"} />
        <MyCodeBlock
          code={
            '"scripts": {\n   "dev": "parcel index.html"\n   "build": "parcel build index.html"\n},'
          }
          language={"json"}
        />
        <p>to run:</p>
        <MyCodeBlock code={"npm run build"} language={"text"} />
      </ul>
    </div>
  );
}

// export function
