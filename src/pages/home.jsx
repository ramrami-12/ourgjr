import { useReduxState } from "../hooks/useReduxState";

export function Home() {
  const isDarkMode = useReduxState();
  return (
    <div>
      <h2>
        Our Github, JavaScript, React ðð» OurGJRð¤£{" "}
      </h2>
      <h3>All of the Front-End</h3>
      <p>ì¬ì í ìë°ì´í¸ ì¤ ìëë¤!ð¤ª</p>
      <p style={{ fontSize: "10px" }}>By Venice and Big Arm in Herings</p>
    </div>
  );
}
