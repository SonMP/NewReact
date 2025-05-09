import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Alert,
    InputGroup
} from "react-bootstrap";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async (e) => {
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
        let res = await postLogin(email, password);
        if (res && +res.EC === 0) {
            toast.success(res.EM);
            navigate('/');
        }
        if (res && +res.EC !== 0) {
            toast.error(res.EM);
        }
        setError("");
    };

    const handleGoogleLogin = () => {
        // TODO: Tích hợp OAuth Google thật
        alert("Đăng nhập bằng Google (chưa tích hợp OAuth)");
    };

    return (
        <Container fluid className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <Card className="shadow-lg p-4" style={{ width: "100%", width: "450px", borderRadius: "1rem" }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="text-primary m-0">MyApp</h3>
                            <Button variant="outline-secondary" onClick={() => navigate('/')}>
                                &#60;&#60; Back
                            </Button>
                        </div>
                        <hr />
                        <Card.Body>
                            <h3 className="text-center mb-4">Đăng nhập</h3>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Nhập email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        />
                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                right: "10px",
                                                transform: "translateY(-50%)",
                                                cursor: "pointer",
                                                color: "#6c757d",
                                            }}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </InputGroup>
                                </Form.Group>

                                <div className="d-flex justify-content-between mb-3">
                                    <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
                                    <a href="#" className="text-decoration-none text-primary">
                                        Quên mật khẩu?
                                    </a>
                                </div>

                                <Button variant="primary" type="submit" className="w-100">
                                    Đăng nhập
                                </Button>

                                <div className="text-center my-3 text-muted">hoặc</div>

                                <Button
                                    variant="outline-danger"
                                    className="w-100 mb-2"
                                    onClick={handleGoogleLogin}
                                >
                                    <i className="fab fa-google me-2"></i> Đăng nhập với Google
                                </Button>

                                <div className="text-center mt-3">
                                    <span>Chưa có tài khoản? </span>
                                    <Link to="/register" className="text-decoration-none text-primary">
                                        Đăng ký ngay
                                    </Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
