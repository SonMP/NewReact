import SideBarLeft from "./SideBarLeft";
import './Admin.scss';

const Admin = (props) => {
    return (
        <div>
            <div className="admin-container">
                <div className="admin-sidebar">
                    <SideBarLeft />
                </div>
                <div className="admin-content">

                </div>
            </div>

        </div>
    )
}
export default Admin;