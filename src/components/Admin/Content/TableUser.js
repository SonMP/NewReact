
import { useState } from "react";
const TableUser = (props) => {
    const { listUsers } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listUsers.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div>
            <table className="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems ?
                        (currentItems.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{indexOfFirstItem + index + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button
                                        onClick={() => props.handleOnUpdateModal(item)}
                                        className="btn btn-warning mx-3"
                                    >
                                        Update
                                    </button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )))
                        :
                        (<div>Not found user</div>)
                    }
                </tbody>
            </table>
            <div className="pagination mt-3">
                {Array.from({ length: Math.ceil(listUsers.length / itemsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={currentPage === i + 1 ? 'btn btn-primary mx-1' : 'btn btn-outline-primary mx-1'}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default TableUser;