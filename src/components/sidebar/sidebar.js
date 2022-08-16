
  import './sidebar.scss'
import {Layout } from 'antd';
import Item from './item';
import {useSelector, useDispatch} from 'react-redux';
import sidebar_items from '../../lists/sidebar_items.js';
import React, { useState } from 'react';
import {setActuvePage}from '../../redux/actions';

const {  Sider  } = Layout;

  
  const Sidebar = () => {
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

         <div className='menu-divider' >Main {!collapsed && 'pages'}</div>
         { sidebar_items.main_pages.map((name) => {
          return <Item 
                  key={name} 
                  active={activePage}
                  item={name} 
                  collapsed={collapsed}
                  onClick={()=>setActivePage(name)}
                />}) 
           }
        
         <div className='menu-divider' >Accept {!collapsed && 'payments'}</div>
         { sidebar_items.accept_payments.map((name) => {
          return <Item 
                  key={name} 
                  item={name} 
                  collapsed={collapsed}
                  active={activePage}
                  onClick={()=>setActivePage(name)}/>
                })
         }
         
         <div className='menu-divider' >Send {!collapsed && 'payments'}</div>
         { sidebar_items.send_payments.map((name) => {
          return <Item 
                  key={name}
                  item={name}
                  collapsed={collapsed}
                  active={activePage}
                  onClick={()=>setActivePage(name)}
            />}) 
        }
      </Sider>
    );
  };

  export default Sidebar;