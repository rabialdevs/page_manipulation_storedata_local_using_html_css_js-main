let userinformation;
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString() {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
// console.log(generateString())
document
  .querySelector("#signupSubmit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();
    let confirmPassword = document
      .querySelector("#confirmpassword")
      .value.trim();

    if (
      (name.length != "") &
      (email.length != "") &
      (password != "") &
      (confirmPassword != "")
    ) {
      let h3 = document.createElement("h3");
      h3.id = "suceesmassage";
      h3.innerText = "Succesfully Signed Up !";
      document.querySelector(".showoutput").appendChild(h3);
      userinformation = {
        id: generateString(),
        userName: name,
        userEmail: email,
        userPassword: password,
        userConfirmPassword: confirmPassword,
      };
      window.localStorage.setItem("User1", JSON.stringify(userinformation));
      // window.location.assign("./profile.html");
      setTimeout(() => {
        window.open("./profile.html", "_blank");
        location.reload();
      },2000);
      
    } else {
      let h3 = document.createElement("h3");
      h3.id = "errormassage";
      h3.innerText = "Error !";
      document.querySelector(".showoutput").appendChild(h3);
    }
  });

