import { useState } from "react";
import { Form, Button, InputGroup, Container, Row, Col, Card } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/apiService";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid email!");
            return;
        }
        if (!password) {
            toast.error('Invalid password!');
            return;
        }
        let res = await register(email, username, password);
        if (res && +res.EC === 0) {
            toast.success(res.EM);
            navigate('/login');
        }
        if (res && +res.EC !== 0) {
            toast.error(res.EM);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>

                    <Card className="p-4 shadow">
                        <div>
                            <Button variant="outline-secondary" onClick={() => navigate('/login')}>
                                &#60;&#60; Back
                            </Button>
                            <h3 className="text-center text-primary mb-4">Đăng ký tài khoản </h3>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                        </div>
                        <Form onSubmit={handleRegister}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Tên người dùng</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập tên người dùng"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Nhập mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <InputGroup.Text
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100" onClick={() => handleRegister()}>
                                Đăng ký
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
