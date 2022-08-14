import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import 'antd/dist/antd.css';
  import './main.scss'
  
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
  import { Breadcrumb, Layout, Row, Col, Menu } from 'antd';
  import moment from 'moment';

  import Switch from '../components/switch/switch';
  import Sidebar from '../components/sidebar/sidebar';
  import Dashboard from '../pages/Dashboard';

  import React, { useState } from 'react';
  const { Header, Content, Footer, Sider } = Layout;
  

  const Main = () => {
    const [live, setLive] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const user = 'Ada'

    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
       <Sidebar />
        <Layout  className="site-layout">
          <Header className="heaser-secction">
          <Row>
            <Col span={12} align="left">
              Today: {moment().format('DD MMMM, YYYY')}
            </Col>
            <Col span={12} align="right">
              <Switch value={live} onChange={()=> setLive(!live)} />
              {live && <span>&nbsp;Live  &nbsp;&nbsp;Welcome back, {user}!</span>  }
            </Col>
          </Row>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Routes>
              <Route exact path='/' element={<Dashboard />}></Route>
            </Routes>

            <Breadcrumb style={{margin: '16px 0'}} >
              <Breadcrumb.Item className='content-header'>
                Salels overview
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };

  export default Main;