const btn = document.querySelector(".get-in-touch");

const form = document.querySelector(".form");
const icons = document.querySelector(".social-icons-container");
const blur = document.getElementById("blur");

const closeForm = document.querySelector(".form-close");

const submitBtn = document.getElementById("submit-btn");

console.log(submitBtn.classList);

btn.addEventListener("click", () => {
  closeForm.classList.remove("hidden");
  submitBtn.setAttribute("hidden", "false");
  form.classList.add("display-form");
  blur.classList.add("blur");
  icons.classList.add("blur");
});

closeForm.addEventListener("click", () => {
  submitBtn.setAttribute("hidden", "");
  closeForm.classList.add("hidden");
  form.classList.remove("display-form");
  blur.classList.remove("blur");
  icons.classList.remove("blur");
});

//* Project Box 2

const projectBox1 = document.getElementById("box-1");
const projectBox1Icon = document.getElementById("box-icon-1");

projectBox1.addEventListener("mouseover", () => {
  projectBox1.classList.add("blur");
  projectBox1Icon.classList.add("set-visible");
});

projectBox1.addEventListener("mouseout", () => {
  projectBox1Icon.classList.remove("set-visible");
  projectBox1.classList.remove("blur");
});

projectBox1Icon.addEventListener("mouseover", () => {
  projectBox1.classList.add("blur");
  projectBox1Icon.classList.add("set-visible");
});

//* Project Box 2

const projectBox2 = document.getElementById("box-2");
const projectBox2Icon = document.getElementById("box-icon-2");

projectBox2.addEventListener("mouseover", () => {
  projectBox2.classList.add("blur");
  projectBox2Icon.classList.add("set-visible");
});

projectBox2.addEventListener("mouseout", () => {
  projectBox2Icon.classList.remove("set-visible");
  projectBox2.classList.remove("blur");
});

projectBox2Icon.addEventListener("mouseover", () => {
  projectBox2.classList.add("blur");
  projectBox2Icon.classList.add("set-visible");
});

//* Project Box 3

const projectBox3 = document.getElementById("box-3");
const projectBox3Icon = document.getElementById("box-icon-3");

projectBox3.addEventListener("mouseover", () => {
  projectBox3.classList.add("blur");
  projectBox3Icon.classList.add("set-visible");
});

projectBox3.addEventListener("mouseout", () => {
  projectBox3Icon.classList.remove("set-visible");
  projectBox3.classList.remove("blur");
});

projectBox3Icon.addEventListener("mouseover", () => {
  projectBox3.classList.add("blur");
  projectBox3Icon.classList.add("set-visible");
});
