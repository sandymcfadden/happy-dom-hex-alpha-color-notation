import { Window } from "happy-dom";

const window = new Window({ url: "https://localhost:8080" });

const div = window.document.createElement("div");

div.style.backgroundColor = "#ffc107cc";

window.document.body.appendChild(div);

// NG: expected: rgba(255, 193, 7, 0.8), actual: #ffc107cc
console.log(
  window.document
    .querySelector("div")
    .style.getPropertyValue("background-color")
);
