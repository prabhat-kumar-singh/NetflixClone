import React, {useState} from "react";

const Create = () => {

    const [info, setInfo] = useState({
        title: "",
        summary: "",
        cast: [],
        poster: "",
        src: "",
        success: "",
        error: ""
    })

    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
    }
    return(
        <div>
            <h1>Upload new movie/clip</h1>
            <form>
                Name of movie: <input type = "text" placeholder = "Enter movie name" value = {info.title} onChange = {handleChange("title")} />
                <br />
                poster: <input type = "file" placeholder = "upload poster"  onChange = {handleChange("poster")} />
                <br />
                source: <input type = "file" placeholder = "upload movie" onChange = {handleChange("src")} />
                <br />

                Summary: <textarea rows= "6" cols = "50" value = {info.summary} onChange = {handleChange("summary")}>Write Summary Here...</textarea>

                <button>Upload</button>
            </form>
        </div>
    )
}

export default Create;