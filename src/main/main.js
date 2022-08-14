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
            <Col span={12} align="right" style={{paddingRight:'40px'}}>
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
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              background:'#fff'
            }}
          >
          </Footer>
        </Layout>
      </Layout>
    );
  };

  export default Main;