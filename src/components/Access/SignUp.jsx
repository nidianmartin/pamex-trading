import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./access.css";
import { signup } from "../../services/api-services";

export default function SignUp() {
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const onFinish = (values) => {
    signup(values)
      .then((r) => console.log(r))
      .catch((e) => setError(e.response.data.message));
  };

  const onFinishFailed = (errorInfo) => {
    setError(errorInfo)
  };

  return (
    <div className="main-page-wrapper user-access-page">
      <div className="main-container">
        <div className="inner-box">
          <h3 className="main-title">Crear Cuenta</h3>
          <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="sign-up-form"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input placeholder="Nombre" />
            </Form.Item>
            <Form.Item
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Please input your Lastname!",
                },
              ]}
            >
              <Input placeholder="Apellido" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="bio">
              <Input placeholder="Biografía" />
            </Form.Item>
            <Form.Item name="phone">
              <Input placeholder="Teléfono" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input placeholder="Contraseña" type="password" />
            </Form.Item>
            <p style={{ fontSize: 10 }} className="password-text">
              Su contraseña debe tener minimo 8 caracteres
            </p>
            <Button
              shape="round"
              className="btn-form"
              htmlType="submit"
            >
              Crear Cuenta
            </Button>
          </Form>
          <div>
            {error ? <p style={{color: 'red', fontSize:8}}>{error}</p> : null}
          </div>
          <div style={{ fontSize: 10 }} className="condition-text font-fix">
            <Link to="/">Terminos del servicio</Link> and{" "}
            <Link to="/">Politica de privacidad</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
