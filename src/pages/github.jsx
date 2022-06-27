// import {CodeBlock} from "react-code-blocks";
import { MyCodeBlock } from "../components/codeblock";

export default function GitHub() {
  const configCode = "git config --global user.name <User Name> \ngit config --global user.email <User Email>";
  const pushCode = "git add .\ngit commit -m <Message>\ngit push <Remote Name> <Branch Name>";
  const crCode = "git clone <Git Repo Link>\ngit remote add <Remote Name> <Git Repo Link>";
  const pullCode = "git pull <Remote Name> <Branch Name>\n⭐️로컬 구조와 github에 올라간 구조가 다를 경우\ngit pull <Remote Name> <Branch Name> --allow-unrelated-histories";
  return (
    <div>
      <h2>개발자라면 꼭 알아야 하는 GitHub 상식🎓</h2>
      <h3>Git Config</h3>
      <MyCodeBlock code={configCode} language={"text"} />
      <h3>You should add 👉🏻 commit 👉🏻 push</h3>
      <MyCodeBlock code={pushCode} language={"text"} />
      <h3>Clone & Remote</h3>
      <MyCodeBlock code={crCode} language={"text"} />
      <h3>Git Pull</h3>
      <MyCodeBlock code={pullCode} language={"text"} />
    </div>
  );
}
