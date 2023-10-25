let getObjTmp = localStorage.getItem("User1");
let fetchObj = JSON.parse(getObjTmp);
document.querySelector("#nameout").innerText = `${fetchObj.userName}`;
document.querySelector("#emailout").innerText = `${fetchObj.userEmail}`;
document.querySelector("#Passout").innerText = `${fetchObj.userPassword}`;
document.querySelector("#profileLogout").addEventListener('click', () => {
    window.localStorage.clear("User1");
    window.open("./index.html");
    location.reload();
});
