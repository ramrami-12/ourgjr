import styles from "../styles/main.module.css"

// 가장 굵은 글씨 (Index, 각 페이지 첫 문구)
export const Text1 = (props) => {
    return <h1 className={styles.text1}>{props.text}</h1>
}

// 다음으로 큰 글씨 (소제목들)
export const Text2 = (props) => {
    return <h2 className={styles.text2}>{props.text}</h2>
}

// 강조하는 글씨
export const Text3 = (props) => {
    return <p sclassName={styles.text3}>{props.text}</p>
}

// plain text
export const Text4 = (props) => {
    return <p className={styles.text4}>{props.text}</p>
}

