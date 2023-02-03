const formData = document.querySelector(".input_data");
formData.addEventListener("submit", (event) => {
  event.preventDefault();
  const local_Storage = {
    userName: document.querySelector("#name").value,
    userEmail: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  localStorage.setItem("userData", JSON.stringify(local_Storage));
});

const data_obj = localStorage.getItem("userData");
const getValue = JSON.parse(data_obj);

window.addEventListener("load", () => {
  if (localStorage.getItem("userData")) {
    document.querySelector("#name").value = getValue.userName;
    document.querySelector("#email").value = getValue.userEmail;
    document.querySelector("#message").value = getValue.message;
  }
});
