import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MostrarModal } from './modal';
import { useNavigate } from 'react-router-dom';

function SignInForm({ onSignIn }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [users] = useState([
    { email: 'admin@gmail', password: 'admin' },

  ]);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const { email, password } = formData;
    const user = users.find((user) => user.email === email && user.password === password);

    if (!email || !password) {
      newErrors.email = 'El campo de email es obligatorio.';
      newErrors.password = 'El campo de contraseña es obligatorio.';
    } else if (!email.includes('@')) {
      newErrors.email = 'El email debe contener "@"';
    } 
    
    if (!user) {
      newErrors.user = 'El usuario no se encuentra registrado';
      setShowModal(true);
    }

    if (Object.keys(newErrors).length === 0) {
      onSignIn();
      navigate('/Sucursales');
      console.log('Inicio de sesión exitoso');
    } else {
      setErrors(newErrors);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div >
    <Form>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="text-danger">{errors.email}</span>}
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="text-danger">{errors.password}</span>}
      </Form.Group>

      <Button className="SignIn-Button" onClick={handleSubmit} > <Link to="/"></Link>
        Ingresar
      </Button>
    </Form>
    <MostrarModal
    show={showModal}
    onHide={closeModal}
    title="Usuario no registrado"
    content="El usuario no se encuentra registrado."
  />
  </div>
  );
}

export { SignInForm };
