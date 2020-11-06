import React from "react";
import { Layout, Menu, Space } from "antd";
import {
  StarOutlined,
  UserOutlined,
  PieChartOutlined,
  FileTextOutlined
} from "@ant-design/icons";
import "./profile.css";
import { Link, Route, Switch } from "react-router-dom";
import { SiTreehouse } from "react-icons/si";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from "../../services/api-services";
import Information from "./Information/Information";
import Dashboard from "./Dashboard/Dashboard";
import Influencers from "./Influencers/Influencers";
import News from "./News/News";

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
        style={{
          overflow: 'auto',
        }}
      >
        <div style={{ margin: 10 }}>
          <Link to="/" className="navbar-logo">
            <SiTreehouse className="navbar-icon" />
            PAMEX
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{ marginTop: 30 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/profile/information">Datos básicos</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Link to="/profile/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<StarOutlined />}>
            <Link to="/profile/influencers">Influencers</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />}>
            <Link to="/profile/news">Noticias</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <div
            className="space-align-block"
            style={{ position: "absolute", left: "78%" }}
          >
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
            <Switch>
              <Route
                exact
                path="/profile/information"
                component={Information}
              ></Route>
              <Route
                exact
                path="/profile/dashboard"
                component={Dashboard}
              ></Route>
              <Route
                exact
                path="/profile/influencers"
                component={Influencers}
              ></Route>
              <Route
                exact
                path="/profile/news"
                component={News}
              ></Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Pamex Trading ©2020</Footer>
      </Layout>
    </Layout>
  );
}
