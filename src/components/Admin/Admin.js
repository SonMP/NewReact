import SideBarLeft from "./SideBarLeft";
import './Admin.scss';
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <div className="admin-container">
                <div className="admin-sidebar">
                    <SideBarLeft collapsed={collapsed} />
                </div>
                <div className="admin-content">
                    <div className="admin-header">
                        <FaBars onClick={() => setCollapsed(!collapsed)} />
                    </div>
                    <div className="admin-main">
                        <Outlet />
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin;