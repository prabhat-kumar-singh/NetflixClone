import { Outlet, NavLink } from "react-router-dom"
import "../../css/Admin.css";

const Admin = () => {
    return(
        <div className = "admin-container">
            <div className = "admin-container-item">
                <div className = "tab">
                    <NavLink to = "/main/admin/create" className = "nav-link">Create Video</NavLink>
                    <br />
                    <NavLink to = "/main/admin/update" className = "nav-link">Update Video</NavLink>
                    <br />
                    <NavLink to = "/main/admin/createCategory" className = "nav-link">Create Category</NavLink>
                    <br />
                    <NavLink to = "/main/admin/:categoryId/updateCategory" className = "nav-link">Update Category</NavLink>
                </div>
                <div className = "tab-value">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin;