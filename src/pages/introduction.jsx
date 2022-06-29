import styles from "../styles/main.module.css";
import { GithubOutlined } from "@ant-design/icons";

export function Intro() {
  const refers = [
    "github에 react deploy 하기",
    "베니스가 애용하는 색 조합 사이트(color hunt)",
    "ant design github",
    "ant design components",
  ];
  const links = [
    "https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/",
    "https://colorhunt.co",
    "https://github.com/ant-design/ant-design.git",
    "https://ant.design/components/overview/",
  ];
  const RefersMap = (props) => {
    return (
      <ul>
        {props.refers.map((refer, index) => {
          return (
            <li key={index}>
              <a href={props.links[index]}>{refer}</a>
            </li>
          );
        })}
      </ul>
    );

    // for (var key in props.dict) {
    //   return <a href={props.dict[key]}>{key}</a>;
    // }
  };
  const ContainLinks = (props) => {
    return (
      <div>
        <span>{props.span1}</span>
        <a href={props.link}>{props.a}</a>
        <span>{props.span2}</span>
      </div>
    );
  };
  return (
    <div>
      <h2>Hi there~🖐🏻 </h2>
      <p style={{color:"white"}}>다크모드를 해야 보이는 글씨입니당 ㅎㅎㅎㅎ 재밌죠?? 지금은 다크모드 개발 중!!! 다시 밝은 모드로 돌아가서 공부하세요~</p>
      <ContainLinks
        span1={"We are Venice🙋🏻‍♀️ and Big Arm🙋🏻‍♂️, interns of "}
        link={"https://heringsglobal.com/"}
        a={"Herings"}
        span2={" in summer, 2022."}
      />
      <p>
        저희가 회사에서 공부했던 frontend 내용들을 정리하고 연습해보기 위해
        react 사이트를 만들었습니다.
      </p>
      <p>
        워낙 빠른 업데이트를 하는 분야이다 보니 버전 오류 등 여러 수정 사항이
        있을 수 있습니다!
      </p>
      <p>그럴 경우 아래 연락처로 문의 주세요!😁 (모든 문의 환영🙌🏻)</p>
      <div className={styles.contact}>
        <GithubOutlined />
        <a href="https://github.com/ramrami-12" className={styles.a}>
          {" "}
          Venice's Github Profile
        </a>
        <p>📧 Email: wislely66@gmail.com</p>
        <GithubOutlined />
        <a href="https://github.com/BeansWithCheese" className={styles.a}>
          {" "}
          Big Arm's Github profile
        </a>
        <p>📧 Email: dukuu0405@gmail.com</p>
      </div>
      <i>이 사이트의 관전 뽀인트는 몽골인 빅암의 멋진 영어 설명🔠, 태생부터 한국인 엔뿌삐 베니스의 흥겨운 한국어 설명🇰🇷 입니다 재미있게 공부해주세요📝</i>
      <div style={{height:"50px"}}></div>
      <ContainLinks
        span1={"❗️fastcampus 강의 "}
        link={"https://fastcampus.co.kr/courses/203720/clips/"}
        a={"🔗 한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online"}
        span2={
          " 을 들으면서 정리한 내용과 구글링 등을 통해 개인적으로 공부한 내용이 포함 되어 있습니다!"
        }
      />
      <div>
        <h4>개발하면서 참고한 칭구들 👀</h4>
        <RefersMap refers={refers} links={links} />
      </div>
    </div>
  );
}
