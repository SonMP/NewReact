import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";

const ManageUser = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});

    useEffect(() => {
        fetchListUser();
    }, [])
    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res && res.DT) {
            setListUsers(res.DT);
        }
    }

    const handleOnUpdateModal = (userData) => {
        setShowUpdateModal(true);
        console.log('data from child:', userData);
        setDataUpdate(userData);
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage Users
            </div>
            <div className="manage-user-content">
                <div className="btn-add-new-user">
                    <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        listUsers={listUsers}
                        handleOnUpdateModal={handleOnUpdateModal}
                    />
                </div>

            </div>
            <ModalCreateUser
                show={showCreateModal}
                setShow={setShowCreateModal}
                fetchListUser={fetchListUser}
            />
            <ModalUpdateUser
                show={showUpdateModal}
                setShow={setShowUpdateModal}
                dataUpdate={dataUpdate}
            />
        </div>
    )
}
export default ManageUser;