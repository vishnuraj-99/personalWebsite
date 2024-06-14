const form = document.querySelector("#submit-form");
const nameInputFeild = document.querySelector("#form-name").value;
const emailInputFeild = document.querySelector("#form-email");
const subjectInputFeild = document.querySelector("#form-subject");
const messageInputFeild = document.querySelector("#form-message");
const formButton = document.querySelector("#form-btn");

const userAlert = document.querySelector(".userAlert");

const nameRegex = "/^s*([a-zA-Z]+(?:s+[a-zA-Z]+)*)s*$/";
const emailRegex = "/^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/";

const isvalid = function () {
  const validationDone = nameRegex.test(nameInputFeild);
  if (!validationDone) {
    userAlert.classList.remove(".d-none");
  }
};

formButton.addEventListener("click", isvalid());
