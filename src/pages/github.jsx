// import {CodeBlock} from "react-code-blocks";
import { MyCodeBlock } from "../components/codeblock";
import { Text2 } from "../components/customText";
import { MyDivider } from "../components/styledComonents";

export default function GitHub() {
  const configCode =
    "git config --global user.name <User Name> \ngit config --global user.email <User Email>";
  const pushCode =
    "git add .\ngit commit -m <Message>\ngit push <Remote Name> <Branch Name>";
  const crCode =
    "git clone <Git Repo Link>\ngit remote add <Remote Name> <Git Repo Link>";
  const pullCode = "git pull <Remote Name> <Branch Name>";
  return (
    <div style={{ overflow: "scroll" }}>
      <Text2 text={"개발자라면 꼭 알아야 하는 GitHub 상식🎓"} />
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
        <p>1. 기존의 git repository를 clone해서 사용하고 싶은 경우</p>
        <ul>
          <li>
            로컬에서 directory를 생성하고(optional) git clone 명령어를
            수행합니다.
          </li>
          <MyCodeBlock
            code={
              "mkdir <My Directory Name>\ncd <My Directory Name>\ngit clone <Git Repo Link>"
            }
            language={"text"}
          />
          <li>
            git clone 명령어를 수행하면 clone한 repository 이름으로 directory가
            생성되기 때문에 별도의 directory를 생성하지 않아도 괜찮습니다!
          </li>
          <li>
            clone을 하면 해당 repository와 자동으로 remote가 등록되어 있지만
            새로운 repository에 remote를 연결하고 싶다면 다음의 코드를 실행해
            주세요👎🏻
          </li>
          <MyCodeBlock code={"git remote add <Remote Name> <Git Repo Link>"} />
          <li>
            code 편집을 할 땐 보통 자기만의 branch를 따로 생성해서 편집해요!
            냅다 main에 올려버리면 아주 큰일이 나는 수가 있어요😡
          </li>
          <p>branch 생성 하는 법</p>
          <MyCodeBlock
            code={
              "git branch //현재 생성된 branch 내용과 내가 어느 branch에 있는지 알 수 있다\ngit branch <New Branch Name>\ngit checkout <New Branch Name>"
            }
            language={"text"}
          />
          <p>또는</p>
          <MyCodeBlock code={"git checkout -b <New Branch Name>"} />
          <p>을 하면 branch 생성과 checkout을 동시에 할 수 있어요!</p>
        </ul>
        <p>2. 나의 repository를 만들어서 코드 편집 후 push 하고 싶은 경우</p>
        <ul>
          <li>
            github page에서 repository를 생성하고 로컬에서도 폴더를 하나 만들어
            줍니다.
          </li>
          <MyCodeBlock
            code={"mkdir <My Directory Name>\ncd <My Directory Name\ngit init>"}
          />
          <li>git init 실행 후, 만든 repository를 remote에 등록 해줍니다.</li>
          <MyCodeBlock code={"git remote add <Remote Name> <Git Repo Link>"} />
          <li>
            여기서 몇가지 주의할 점은 repository를 만들 때 readme 파일을
            자동으로 생성했다면 로컬에 있는 폴더와 github repository의 구조가
            달라서 push가 안될 수 있어요! push 전에 먼저 풀을 해줘서 로컬과
            git에서의 구조를 통일해줍니다.
          </li>
          <MyCodeBlock
            code={
              "⭐️로컬 구조와 github에 올라간 구조가 다를 경우\ngit pull <Remote Name> <Branch Name> --allow-unrelated-histories"
            }
            language={"text"}
          />
          <li>
            그리고 git branch 명령어로 branch를 확인해주세요! git branch가
            없으면 생성하고, master로 되어 있다면 "git branch -M main"을
            실행해서 main branch를 main으로 만들어줍니다.
          </li>
        </ul>
      </details>
      <div style={{height:"50px"}}></div>
      <i>
        ❗️주의❗️ git hub에서는 이 외에서도 협업과 code 관리를 위해 많은 기능을
        포함하고 있답니다! github 사용에 미숙하시다면 꼭!!! 구글링과 연습을 통해
        익숙해지기를 바래요😉
      </i>
    </div>
  );
}
