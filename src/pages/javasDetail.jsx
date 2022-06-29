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

export function ScriptJS() {
  return (
    <div>
      <h3>JavaSript</h3>
      <Divider />
      <p>To create a library of js functions, use</p>
      <MyCodeBlock code={"export default function getType(data) {\n   return Object.prototype.toString.call(data).slice(8, -1);\n}"} language={"javascript"} />
      <p>export default function to create library functions to use these functions:</p>
      <MyCodeBlock code={"import getType from './the java script'"} language={'javascript'}/>
      <p>기본적인 JavaScript 문법 설명 및 예제가 있는 github repository 입니다! 참고해주세용😚 (업데이트 진행 중)</p>
      <a href="https://github.com/ramrami-12/Javascript-Basic.git">🔗 (Click Here!) Javascript Basic Links</a>
    </div>
  );
}

export function ClassJS() {
  return (
    <div>
      <h3>Javascript Class</h3>
      
    </div>
  );
}
