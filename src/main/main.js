import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import 'antd/dist/antd.css';
  import './main.scss'
  import { Breadcrumb, Layout, Row, Col, Menu } from 'antd';
  import moment from 'moment';
  import Switch from '../components/switch/switch';
  import Sidebar from '../components/sidebar/sidebar';


  import React, { useState } from 'react';
  const { Header, Content, Footer, Sider } = Layout;
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  const Dashboard = () => {
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

  export default Dashboard;