import React from "react";
import { Layout, Menu, Space } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./profile.css";
import { Link } from "react-router-dom";
import { SiTreehouse } from "react-icons/si";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/api-services";

const { Header, Content, Footer, Sider } = Layout;

export default function Profile() {
  const authContext = useAuthContext();

  const handleLogout = async () => {
    try {
      await logout();

      authContext.logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div>
          <Link to="/" className="navbar-logo">
            <SiTreehouse className="navbar-icon" />
            PAMEX
          </Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[""]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <div className="space-align-block" style={{marginLeft:750 }}>
            <Space align="center">
            <span className="mock-block">{authContext.user.email}</span>
              <button
                onClick={handleLogout}
                type="button"
                className="button-header"
              >
                Log Out
              </button>
            </Space>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
