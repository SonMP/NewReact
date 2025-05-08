import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import avatar from '../../../assets/image1.jpeg';
import { FcPlus } from 'react-icons/fc';
import axios from 'axios';
import { toast } from 'react-toastify';
import { createNewUser } from '../../../services/apiService';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, fetchListUser, dataUpdate } = props;
    const handleClose = () => {
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setPreviewImage('');
        setImage('');
        setShow(false);
    }
    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
            setImage('');
        }
        console.log('run')
    }, [dataUpdate])
    // const handleShow = () => setShow(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState(null);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            setPreviewImage('');
        }

    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleCreateNewUser = async () => {
        //validate
        const isValidEmail = validateEmail(email);

        const errors = [];
        if (!isValidEmail) errors.push('email');
        if (!password) errors.push('password');
        if (!username) errors.push('username');
        if (errors.length > 0) {
            toast.error(`Invalid ${errors.join(', ')}`);
            return;
        }
        let data = await createNewUser(email, password, username, role, image);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            fetchListUser();
            handleClose();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
        console.log('check res:', data);
    }
    return (
        <>
            {/* <Button variant="btn btn-primary" onClick={handleShow}>
                Add new User
            </Button> */}

            <Modal show={show} onHide={handleClose} className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update a User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} disabled />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="" value={password} onChange={(event) => setPassword(event.target.value)} disabled />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="role" className="form-label">Role</label>
                                <select className="form-select" id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Avatar Image</label>
                            <input type="file" className="form-control" id="image" accept="image/*" onChange={(event) => handleUploadImage(event)} />
                        </div>
                        {previewImage ?
                            (
                                <div className='col-md-12 img-preview '>
                                    <img src={previewImage} />
                                </div>
                            ) :
                            <div className='col-md-12 img-preview '>
                                <span>
                                    Preview image
                                </span>
                            </div>

                        }

                    </form>
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleCreateNewUser()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;