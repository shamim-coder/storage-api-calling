// calling api from javascript | axios api

// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios returns response object - data, status, statusText, headers, config

axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

axios("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    data: {
        id: 1,
        name: "Shamim Reza",
        email: "wpshamim@gmail.com",
    },
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
axios
    .patch("https://jsonplaceholder.typicode.com/users/1", {
        id: 12,
        title: "web developer",
        phone: "01711860139",
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

axios
    .delete("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

// axios POST request
const options = {
    url: "https://jsonplaceholder.typicode.com/users",
    method: "POST",
    data: {
        name: "David",
        age: 45,
    },
};

axios(options).then((response) => {
    console.log(response);
});

// async await

const makeRequest = async (config) => {
    return await axios(config);
};

makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: {
        name: "Akramuzzaman",
        designation: "Managing Director",
        company: "Confident Group",
    },
})
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
