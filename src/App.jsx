import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PlusOutlined,
  HomeOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import AllRouter from "./api/Router"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css'

const { Header, Sider, Content } = Layout;

export default function SiderDemo() {
    const [state, setState] = useState({
        collapsed: false,
    });
    const customHistory = createBrowserHistory();
    const [link, setLink] = useState(customHistory.location.pathname)
    
    function toggle() {
        setState({
            collapsed: !state.collapsed,
        });
    };
    
    return (
        <Router history={customHistory}>
          <Layout style={{"height":"100vh"}}>
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={link}>
                <Menu.Item key='/createEpisode' icon={<PlusOutlined />}>
                  <Link to="/createEpisode">Create a Episode</Link>                  
                </Menu.Item>
                <Menu.Item key='/characterList' icon={<UserOutlined />} >
                  <Link to="/characterList">Character List</Link>                  
                </Menu.Item>
                <Menu.Item key='/locationList' icon={<HomeOutlined />}>
                  <Link to="/locationList">Location List</Link>                  
                </Menu.Item>
                <Menu.Item key='/episodes' icon={<DatabaseOutlined />}>
                  <Link to="/episodes">Episodes</Link>                  
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280
                }}
              >
                <AllRouter />
              </Content>
            </Layout>
          </Layout>
        </Router>
    );
}
