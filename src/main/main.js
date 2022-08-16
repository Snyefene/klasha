
  import 'antd/dist/antd.css';
  import './main.scss'
  
import {
  Routes,
  Route,
} from 'react-router-dom';
  import { Layout, Row, Col,} from 'antd';
  import moment from 'moment';

  import Switch from '../components/switch/switch';
  import Sidebar from '../components/sidebar/sidebar';
  import Dashboard from '../pages/dashboard/Dashboard';
  import Transactions from '../pages/transactions/transactions';
  import {
    useWindowSize,
  } from '@react-hook/window-size';

  import React, { useState } from 'react';
  const { Header, Content, Footer, Sider } = Layout;
  

  const Main = () => {
    const [live, setLive] = useState(true);
    const [width] = useWindowSize()

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
            <Col span={width <= 500? 24 : 12} align="left">
              Today: {moment().format('DD MMMM, YYYY')}
            </Col>
            <Col  span={width <= 500? 24 : 12} align="right" 
                style={{paddingRight:'40px', marginTop: width <=500 && '-30px'}}>
              {
                width >=400 && 
                <>
                  <Switch value={live} onChange={()=> setLive(!live)} />
                 {live && 
                  <span  style={{ marginTop: width <=500 && '630px'}}>
                    &nbsp;Live  &nbsp;&nbsp;Welcome back, {user}!
                </span>  
                }
                </>
              }
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
              <Route exact path='/Transactions' element={<Transactions />}></Route>

            </Routes>
          </Content>
          <Footer
            style={{
              textAlign:  'center',
              background: '#fff'
            }}>
          </Footer>
        </Layout>
      </Layout>
    );
  };

  export default Main;