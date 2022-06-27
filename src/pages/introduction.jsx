import styles from "../styles/main.module.css";

export function Intro() {
  const refers = ["Json 위키백과", "Lodash", "React-Code-Block"];
  const links = [
    "https://ko.wikipedia.org/wiki/JSON",
    "https://lodash.com/docs/4.17.15",
    "https://www.npmjs.com/package/react-code-blocks",
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
      <ContainLinks
        span1={"We are Venice🙋🏻‍♀️ and Big Arm🙋🏻‍♂️, interns of "}
        link={"https://heringsglobal.com/"}
        a={"Herings"}
        span2={" in summer, 2022."}
      />
      <p>
        저희가 회사에서 공부했던 frontend 내용들을 정리하기 위해 사이트를
        만들었습니다.
      </p>
      <p>
        워낙 빠른 업데이트를 하는 분야이다 보니 버전 오류 등 여러 수정 사항이
        있을 수 있습니다!
      </p>
      <p>그럴 경우 아래 연락처로 문의 주세요!😁 (모든 문의 환영🙌🏻)</p>
      <div className={styles.contact}>
        <a href="https://github.com/ramrami-12" className={styles.a}>
          🔗 Venice's Github Profile
        </a>
        <p>📧 Email: wislely66@gmail.com</p>
        <a href="https://github.com/BeansWithCheese" className={styles.a}>
          🔗 Big Arm's Github profile
        </a>
        <p>📧 Email: dukuu0405@gmail.com</p>
      </div>
      <ContainLinks
        span1={"fastcampus 강의 "}
        link={"https://fastcampus.co.kr/courses/203720/clips/"}
        a={"'한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.'"}
        span2={
          " 를 들으면서 정리한 내용과 구글링 등을 통해 개인적으로 공부한 내용이 포함 되어 있습니다!"
        }
      />
      <div>
        <h4>참고 링크 (References)</h4>
        <RefersMap refers={refers} links={links} />
      </div>
    </div>
  );
}
