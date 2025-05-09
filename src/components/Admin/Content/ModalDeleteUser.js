import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, dataUser, fetchListUser } = props;
    const handleClose = () => {
        setShow(false)
    }
    const handleDeleteUser = async () => {
        let data = await deleteUser(dataUser.id);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            // await fetchListUser();
            props.setCurrentPage(1);
            await props.fetchListUserWithPaginate(1);
            handleClose();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <Modal show={show} onHide={handleClose} className='modal-add-user'>

            <Modal.Header closeButton>
                <Modal.Title>Confirm delete the User?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure delete this user with email: <b>{dataUser && dataUser.email ? dataUser.email : ""}</b> </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()} >Cancel</Button>
                <Button variant="primary" onClick={() => handleDeleteUser()}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDeleteUser;