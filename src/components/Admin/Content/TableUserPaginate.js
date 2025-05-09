import ReactPaginate from "react-paginate";
import { useState } from "react";

const TableUserPaginate = (props) => {
    const { listUsers, pageCount } = props;

    const handlePageClick = (event) => {
        props.fetchListUserWithPaginate(+event.selected + 1);
        props.setCurrentPage(+event.selected + 1);
    }
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
                    {listUsers ?
                        (listUsers.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{(props.currentPage - 1) * props.itemPerPage + index + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary"
                                        onClick={() => props.handleOnViewModal(item)}>
                                        View
                                    </button>
                                    <button
                                        onClick={() => props.handleOnUpdateModal(item)}
                                        className="btn btn-warning mx-3">
                                        Update
                                    </button>
                                    <button className="btn btn-danger"
                                        onClick={() => props.handleOnDeleteModal(item)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )))
                        :
                        (<div>Not found user</div>)
                    }
                </tbody>
            </table>
            <div className="user-paginate d-flex justify-content-center">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>

        </div>
    )
}
export default TableUserPaginate;