// import {CodeBlock} from "react-code-blocks";
import styles from "../styles/main.module.css"
import { MyCodeBlock } from "../components/codeblock";
import { MyDivider } from "../components/styled-comonents";

export default function GitHub() {
  const configCode = "git config --global user.name <User Name> \ngit config --global user.email <User Email>";
  const pushCode = "git add .\ngit commit -m <Message>\ngit push <Remote Name> <Branch Name>";
  const crCode = "git clone <Git Repo Link>\ngit remote add <Remote Name> <Git Repo Link>";
  const pullCode = "git pull <Remote Name> <Branch Name>\n⭐️로컬 구조와 github에 올라간 구조가 다를 경우\ngit pull <Remote Name> <Branch Name> --allow-unrelated-histories";
  return (
    <div style={{overflow:"scroll"}}>
      <h2>개발자라면 꼭 알아야 하는 GitHub 상식🎓</h2>
      <h3>Git Config</h3>
      <MyCodeBlock code={configCode} language={"text"} />
      <h3>Git add 👉🏻 commit 👉🏻 push</h3>
      <MyCodeBlock code={pushCode} language={"text"} />
      <h3>Git Clone and Remote</h3>
      <MyCodeBlock code={crCode} language={"text"} />
      <h3>Git Pull</h3>
      <MyCodeBlock code={pullCode} language={"text"} />
      <MyDivider />
      <details>
        <summary>기본적인 깃 사용법</summary>
        <ul>
          <li>먼저 기존의 git repository를 clone해서 사용하고 싶은 경우, 로컬에서 clone 하고 싶은 directory로 들어가 git clone 명령어를 수행합니다.</li>
          <MyCodeBlock code={"mkdir <My Directory Name>\ncd <My Directory Name>\ngit clone <Git Repo Link>"} language={"text"}/>
          <li>git clone 명령어를 수행하면 clone한 repository 이름으로 directory가 생성되기 때문에 별도의 directory를 생성하지 않아도 괜찮습니다!</li>
          <li>clone을 하면 해당 repository와 자동으로 remote가 등록되어 있지만 새로운 repository에 remote를 연결하고 싶다면 다음의 코드를 실행해 주세요👎🏻</li>
          <MyCodeBlock code={"git remote add <Remote Name> <Git Repo Link>"}/>
        </ul>
      </details>
    </div>
  );
}
