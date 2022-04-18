// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string

// setItem(key, value)

console.log(localStorage);

const inputHandler = () => {
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputData = {};
    inputData.name = inputName.value;
    inputData.email = inputEmail.value;
    localStorage.setItem("user", JSON.stringify(inputData));
};

const userInfo = localStorage.getItem("user");
const user = JSON.parse(userInfo);

document.getElementById("show-name").innerText = user.name;
document.getElementById("show-email").innerText = user.email;
