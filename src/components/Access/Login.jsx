import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/api-services";
import "./access.css"

const validations = {
  email: (v) => v.length,
  password: (v) => v.length,
};

const Login = () => {
  const [state, setState] = useState({
    data: {
      email: "",
      password: "",
    },
    error: {
      email: true,
      password: true,
    },
    touch: {},
  });

  const [loginError, setLoginError] = useState(null);

  const authContext = useAuthContext();

  const { data, error, touch } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await login(data);

      authContext.login(user);
    } catch (err) {
      setLoginError(err.response?.data?.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const validationFn = validations[name];
    const isValid = validationFn(value);

    setState((prev) => {
      return {
        ...prev,
        data: {
          ...prev.data,
          [name]: value,
        },
        error: {
          ...prev.error,
          [name]: !isValid,
        },
      };
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setState((prev) => {
      return {
        ...prev,
        touch: {
          ...touch,
          [name]: true,
        },
      };
    });
  };

  const isError = Object.values(error).some((err) => err);

  return (
    <div className="main-page-wrapper user-access-page">
      <div className="main-container">
        <div className="inner-box">
          <h3 className="main-title">Login</h3>
          {loginError && <div className="alert alert-danger">{loginError}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Email</label>

              <input
                value={data.email}
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                type="text"
                className={`form-control ${
                  touch.email && error.email ? "is-invalid" : ""
                }`}
                placeholder="Enter email"
              />

              <div className="invalid-feedback">email es invalido</div>
            </div>

            <div className="form-group">
              <label htmlFor="tagline">Contraseña</label>

              <input
                name="password"
                value={data.password}
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                className={`form-control ${
                  touch.password && error.password ? "is-invalid" : ""
                }`}
                placeholder="Enter password"
              />
                       <p style={{ fontSize: 10 }} className="password-text">
              Su contraseña debe contener minimo 8 caracteres
            </p>
              <div className="invalid-feedback">error</div>
            </div>

            <button
              type="submit"
              className="btn-form"
              disabled={isError}
            >
              Iniciar Sesión
            </button>
          </form>
          <div style={{ fontSize: 10 }} className="condition-text font-fix">
            
            Al hacer clic en <Link to="/signup"> Crear cuenta </Link> acepta
            nuestra
            <Link to="/">Terminos del servicio</Link> and{" "}
            <Link to="/">Politica privacidad</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
