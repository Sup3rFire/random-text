import { Component, createSignal } from "solid-js";

import styles from "./App.module.css";

const App: Component = () => {
  const [fontSize, setFontSize] = createSignal(10);
  function calculateFontSize(textLength: number) {
    const baseSize = 25;
    if (textLength >= baseSize - 4) {
      textLength = baseSize - 4;
    }
    console.log(textLength);
    setFontSize(baseSize - textLength);
  }
  calculateFontSize((localStorage.getItem("text") ?? "The").length);

  return (
    <div class={styles.App}>
      <h1
        class={styles.text}
        contentEditable
        style={{
          "font-size": `${fontSize()}vw`,
        }}
        onInput={(event) =>
          event.target.textContent &&
          (localStorage.setItem("text", event.target.textContent),
          calculateFontSize(event?.target.textContent.length))
        }
      >
        {localStorage.getItem("text") ?? "The"}
      </h1>
    </div>
  );
};

export default App;
