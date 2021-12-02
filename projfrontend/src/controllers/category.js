export const createCategory = (category) => {
    return fetch("http://localhost:8000/api/category/create", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category)
    })
    .then(res => res.json())
    .catch(err => {
        console.log(err);
    })
}