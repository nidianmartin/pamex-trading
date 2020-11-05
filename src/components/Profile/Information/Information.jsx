import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import "./Information.css";
import { Avatar } from "antd";
import { Tabs, Form, Input, Button  } from "antd";

const { TabPane } = Tabs;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default function Information() {
  const authContext = useAuthContext();

  const onFinish = (values) => {
    console.log(values)
  };

  function callback(key) {
    console.log(key);
  }

  return (
  <Form {...layout} onFinish={onFinish} validateMessages={validateMessages}>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Datos Bàsicos" key="1" style={{ marginLeft: "-7%", width: "40%" }}>
      <Form.Item
        name={['name']}
        label="Nombre"
      >
        <Input value={authContext.user.name}/>
      </Form.Item>
      <Form.Item
        name={['lastname']}
        label="Apellido"
      >
        <Input value={authContext.user.lastname}/>
      </Form.Item>
      <Form.Item
        name={['email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input value={authContext.user.email} />
      </Form.Item>
      <Form.Item
        name={['phone']}
        label="Teléfono"
      >
        <Input value={authContext.user.phone}/>
      </Form.Item>
      <Form.Item name={['bio']} label="Biografía">
        <Input.TextArea value={authContext.user.bio} />
      </Form.Item>
      </TabPane>
      <TabPane tab="Billeteras" key="2" style={{ marginLeft: "-7%", width: "40%" }}>
      <Form.Item name={['website']} label="Website">
        <Input />
      </Form.Item>
      </TabPane>
    </Tabs>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" style={{marginLeft:"-28%"}}>
          Actualizar Información
        </Button>
      </Form.Item>
  </Form>
  );
}
