import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import './sidebar.scss'
import {Layout, Row, Col, Menu } from 'antd';
import Item from './item';
import {useSelector, useDispatch} from 'react-redux';
import sidebar_items from '../../lists/sidebar_items.js';
import React, { useState } from 'react';
import {setActuvePage}from '../../redux/actions';

const {  Sider  } = Layout;

  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = ['Dashboar', 'Balances', 'Transactions', 'Analytics','Marketing']
  
  const Sidebar = () => {
    const user = 'Ada'
    const dispatch =  useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const {activePage} = useSelector((state) => state.dashboard);


    const setActivePage = (page) => {
      return dispatch(setActuvePage(page))
     }

    return (
        <Sider width={350} className='main'  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
         <div align="left" className='logo-wrap'>
           Klasha
         </div>

         <div className='menu-divider' >Main pages</div>
         { sidebar_items.main_pages.map((name) => {
          return <Item 
                  key={name} 
                  active={activePage}
                  item={name} 
                  onClick={()=>setActivePage(name)}
                />}) 
           }
        
         <div className='menu-divider' >Accept payments</div>
         { sidebar_items.accept_payments.map((name) => {
          return <Item 
                  key={name} 
                  item={name} 
                  active={activePage}
                  onClick={()=>setActivePage(name)}/>
                })
         }
         
         <div className='menu-divider' >Send payments</div>
         { sidebar_items.send_payments.map((name) => {
          return <Item 
                  key={name}item={name}
                  active={activePage}
                  onClick={()=>setActivePage(name)}
            />}) 
        }
      </Sider>
    );
  };

  export default Sidebar;