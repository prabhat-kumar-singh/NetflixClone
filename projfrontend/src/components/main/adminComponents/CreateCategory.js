import React, {useState} from "react";
import { createCategory } from "../../../controllers/category";


const CreateCategory = () => {

    const [cate, setCate] = useState({
        name: "",
        error: "",
        success: false
    });

    const onSubmit = (event) => {
        event.preventDefault();
        const {name, error} = cate;
        createCategory({name})
        .then(data => {
            if(data.error){
                setCate({...cate, error: data.error})
            }else{
                setCate({...cate, error: "", success: true})
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div className = "category-container">
            <div className = "content">
                <h1>Create Category</h1>
                <div className = "error">
                    {cate.error ? cate.error : ""}
                    {cate.success ? "Successfully created category" : ""}
                </div>
                <form>
                    <input type = "text" value = {cate.name} placeholder = "category name" onChange = {(e) => {
                        setCate({...cate, name: e.target.value});
                    }} />
                    <button
                    onClick = {onSubmit}
                    >Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateCategory;