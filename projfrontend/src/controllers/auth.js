export const authenticate = (data, next) => {
    if(typeof window!=="undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

export const isSignedIn = () => {
    if(typeof window!=="undefined"){
        return localStorage.getItem("jwt")? true : false;
    }
    return false;
}

export const signin = user => {
    return fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .catch(err => {
        console.log(err);
    })
}

export const signup = user => {
    return fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const signout = () => {
    if(typeof window!=="undefined"){
        if(localStorage.getItem("jwt")){
            localStorage.removeItem("jwt")
            return {
                message: "Sign out successfully"
            }
        }
    }
}