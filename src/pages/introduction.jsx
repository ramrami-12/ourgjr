import styles from "../styles/main.module.css";

export function Intro() {
  return (
    <div>
      <h2>Hi there~🖐🏻 </h2>
      <span>We are Venice🙋🏻‍♀️ and Big Arm🙋🏻‍♂️, interns of </span>
      <a href="https://heringsglobal.com/" className={styles.a}>
       🏢Herings
      </a>
      <span> in summer, 2022.</span>
      <p>
        저희가 회사에서 공부했던 Github부터 html, css, JavaScript, React 까지
        frontend 내용들을 정리하기 위해 사이트를 만들었습니다
      </p>
      <p>참고해서 공부해 주시고 문의사항은 아래 연락처로 부탁드려요! 📨</p>
      <div className={styles.contact}>
        <a href="https://github.com/ramrami-12" className={styles.a}>
          🔗 Venice's Github Profile
        </a>
        <p>📧 Email: wislely66@gmail.com</p>
        <a href="https://github.com/" className={styles.a}>
         🔗 Big Arm's Github profile
        </a>
        <p>📧 Email: dukuu0405@gmail.com</p>
      </div>
      <div>
        <p>참고 링크 (References)</p>
        <span>fastcampus 강의 </span>
        <a href="https://fastcampus.co.kr/courses/203720/clips/">
          '한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online.'
        </a>
        <span>
          를 들으면서 정리한 내용과 구글링 등을 통해 개인적으로 공부한 내용이
          포함 되어 있습니다!
        </span>
      </div>
    </div>
  );
}
