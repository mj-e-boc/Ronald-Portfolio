function validate(event) {
  const text = document.getElementById("email").value;
  const msg = document.querySelector("#message");
  const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if (regx.test(text)) {
      document.getElementById("message").innerHTML = "Success";
      document.getElementById("message").style.color = "#AFFF80";
      msg.classList.toggle("active");
      msg.reset();
    } else {
      document.getElementById("message").innerHTML =
        "Error !!! Please enter the email in lower case";
      document.getElementById("message").style.color = '#FFCCCB';
      msg.classList.toggle("active");
      event.preventDefault();
    }
  }

document.getElementById("get-int-btn").addEventListener("click", validate);
