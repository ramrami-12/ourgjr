import { CodeBlock } from "react-code-blocks";

export function MyCodeBlock(props) {
    return (
        <CodeBlock text={props.code} language={props.language} wrapLinkes/>
    );
}