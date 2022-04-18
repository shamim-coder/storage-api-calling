// calling api from javascript | XMLHttpRequest

const makeRequest = (method, api, body) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, api);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = () => {
            let data = xhr.response;
            data = JSON.parse(data);
            console.log(xhr.status);
            resolve(data);
        };

        xhr.onerror = () => {
            reject(console.log(xhr.status));
        };
        xhr.send(JSON.stringify(body));
    });
};

const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/users").then((res) => console.log(res));
};
const sendData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/users", {
        method: "post",
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    });
};

const updatedData = () => {
    makeRequest("PUT", "https://jsonplaceholder.typicode.com/users/1", {
        method: "put",
        name: "Shamim Reza",
        username: "wpshamim",
        email: "wpshamim@gmail.com",
    });
};

const updatedSingleData = () => {
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",
        name: "Shamim Reza",
        username: "wpshamim",
        email: "wpshamim@gmail.com",
        phone: "01718860139",
    });
};
const deleteData = () => {
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/users/1");
};

// getData();
// sendData();
// updatedData();
// updatedSingleData();
// deleteData();
