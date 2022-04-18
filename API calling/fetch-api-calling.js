// calling api from javascript | fetch api ==========================================================

const makeRequest = (api, body) => {
    fetch(api, body)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status + " Data not Found");
            } else {
                return res.json();
            }
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users");
};
const sendData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            method: "POST",
            name: "Shamim Reza",
            title: "Web Developer",
            number: "01718860139",
            age: 25,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
};

const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        body: JSON.stringify({
            method: "PUT",
            name: "Abdur Rahman",
            title: "Graphic Designer",
            number: "01877444455",
            age: 31,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
};

const updateSingleData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",
        body: JSON.stringify({
            name: "Abdur Rahman",
            title: "Graphic Designer",
            number: "01877444455",
            age: 31,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
};

const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE",
        body: JSON.stringify({
            name: "Abdur Rahman",
            title: "Graphic Designer",
            number: "01877444455",
            age: 31,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
};
getData();
sendData();
updateData();
updateSingleData();
deleteData();
