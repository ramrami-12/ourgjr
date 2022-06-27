// import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { JSBasicNavLinks, JSLUNavLinks } from "../components/navLinks";

export default function JavaScript() {
  return (
    <div>
      <h2>No JavaChip Frappuccino, But JavaScript🥹🤣</h2>
      <details>
        <summary>Basics🌿</summary>
        <JSBasicNavLinks />
      </details>
      <details>
        <summary>Level Up!!🔥</summary>
        <JSLUNavLinks />
      </details>
    </div>
  );
}
