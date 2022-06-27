import {CodeBlock} from "react-code-blocks";

export default function GitHub() {
  const configCode = "git config --global user.name <User Name> \ngit config --global user.email <User Email>";
  const pushCode = "git add .\ngit commit -m <Message>\ngit push <Remote Name> <Branch Name>";
  const crCode = "git clone <Git Repo Link>\ngit remote add <Remote Name> <Git Repo Link>";
  return (
    <div>
      <h2>개발자라면 꼭 알아야 하는 GitHub 상식🎓</h2>
      <h3>Git Config</h3>
      <CodeBlock text={configCode} />
      <h3>You should add 👉🏻 commit 👉🏻 push</h3>
      <CodeBlock text={pushCode} />
      <h3>Clone & Remote</h3>
      <CodeBlock text={crCode} />
    </div>
  );
}
