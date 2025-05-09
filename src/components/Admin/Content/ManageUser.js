import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser, getAllUserWithPaginate } from "../../../services/apiService";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = () => {
    const LIMIT_USER = 6;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [dataUser, setDataUser] = useState({});

    useEffect(() => {
        // fetchListUser();
        fetchListUserWithPaginate(currentPage);
    }, [])
    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res && res.DT) {
            setListUsers(res.DT);
        }
    }

    const fetchListUserWithPaginate = async (page) => {
        let res = await getAllUserWithPaginate(page, LIMIT_USER);
        if (res && res.DT && res.DT.users) {
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }

    const handleOnUpdateModal = (userData) => {
        setShowUpdateModal(true);
        setDataUser(userData);
    }
    const resetDataUser = () => {
        setDataUser({});
    }
    const handleOnViewModal = (userData) => {
        setShowViewModal(true);
        setDataUser(userData);
    }
    const handleOnDeleteModal = (userData) => {
        setShowDeleteModal(true);
        setDataUser(userData);
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleOnUpdateModal={handleOnUpdateModal}
                        handleOnViewModal={handleOnViewModal}
                        handleOnDeleteModal={handleOnDeleteModal}
                    /> */}
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleOnUpdateModal={handleOnUpdateModal}
                        handleOnViewModal={handleOnViewModal}
                        handleOnDeleteModal={handleOnDeleteModal}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemPerPage={LIMIT_USER}
                    />
                </div>

            </div>
            <ModalCreateUser
                show={showCreateModal}
                setShow={setShowCreateModal}
                fetchListUser={fetchListUser}
                fetchListUserWithPaginate={fetchListUserWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ModalUpdateUser
                show={showUpdateModal}
                setShow={setShowUpdateModal}
                dataUpdate={dataUser}
                fetchListUser={fetchListUser}
                resetDataUser={resetDataUser}
                fetchListUserWithPaginate={fetchListUserWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <ModalViewUser
                show={showViewModal}
                setShow={setShowViewModal}
                dataUser={dataUser}
                resetDataUser={resetDataUser}
            />
            <ModalDeleteUser
                show={showDeleteModal}
                setShow={setShowDeleteModal}
                fetchListUser={fetchListUser}
                dataUser={dataUser}
                fetchListUserWithPaginate={fetchListUserWithPaginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
export default ManageUser;