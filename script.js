// test

// console.log(element);

const x = function () {
  console.log("test");
};

const btn = document.querySelector(".get-in-touch");

const form = document.querySelector(".form");
const icons = document.querySelector(".social-icons-container");
const blur = document.getElementById("blur");

const closeForm = document.querySelector(".form-close");

console.log(document.title);

btn.addEventListener("click", () => {
  form.classList.add("display-form");
  blur.classList.add("blur");
  icons.classList.add("blur");
});

closeForm.addEventListener("mouseover", () => {
  document
    .getElementById(".form-close-icon")
    .classList.add("form-close-icon-hover");
});

closeForm.addEventListener("click", () => {
  form.classList.remove("display-form");
  blur.classList.remove("blur");
  icons.classList.remove("blur");
});
