const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const alignLeft = document.querySelector(".left-align");
const alignCenter = document.querySelector(".center-align");
const alignRight = document.querySelector(".right-align");
const upperCase = document.querySelector(".uppercase");
const lowerCase = document.querySelector(".lowercase");
const capitalize = document.querySelector(".capitalize");
const clear = document.querySelector(".clear");
const textarea = document.getElementById("textarea1");

// Event listeners.
boldBtn.addEventListener("click", () => (textarea.style.fontWeight = "bold"));

italicBtn.addEventListener(
  "click",
  () => (textarea.style.fontStyle = "italic"),
);

alignLeft.addEventListener("click", () => (textarea.style.textAlign = "left"));

alignCenter.addEventListener(
  "click",
  () => (textarea.style.textAlign = "center"),
);

alignRight.addEventListener(
  "click",
  () => (textarea.style.textAlign = "right"),
);

upperCase.addEventListener(
  "click",
  () => (textarea.style.textTransform = "uppercase"),
);

lowerCase.addEventListener(
  "click",
  () => (textarea.style.textTransform = "lowercase"),
);

capitalize.addEventListener(
  "click",
  () => (textarea.style.textTransform = "capitalize"),
);

clear.addEventListener("click", () => {
  textarea.style.fontWeight = "normal";
  textarea.style.fontStyle = "normal";
  textarea.style.textAlign = "left";
  textarea.style.textTransform = "capitalize";
  textarea.value = "";
});
