const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        throw new Error(res.status + "not found");
    } else {
        const data = res.json();
        return data;
    }
};

const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users")
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
const sendData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",
        body: JSON.stringify({
            id: 15,
            title: "changes title",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/users/1", { method: "DELETE" })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
getData();
sendData();
updateData();
deleteData();
