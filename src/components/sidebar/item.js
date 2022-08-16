import { Link } from "react-router-dom";
import {
    SoundOutlined,
    SyncOutlined,
    PieChartOutlined,
    ShoppingCartOutlined 

    } 
 from '@ant-design/icons'

const Item = ({item, collapsed, active, onClick}) => {
    const activeClass = active === item && 'active-item';
    const link = item === 'Dashboard'? '/' : `${item}`

    const getIcon = () => {
        if(item === 'Dashboard'){return <PieChartOutlined/>};
        if(item === 'Balances'){return <SoundOutlined />};
        if(item === 'Transactions'){return <SoundOutlined />};
        if(item === 'Analytics'){return <SoundOutlined />};
        if(item === 'Marketing'){return <SoundOutlined />};
        if(item === 'KlashaCheckout'){return < ShoppingCartOutlined  />}
        if(item === 'Payment Links'){return <SoundOutlined />}
        if(item === 'KlashaWire'){return <SoundOutlined />}
        if(item === 'Exchange rates'){return <SyncOutlined />}
    }

    return (
        <Link to={link}>
        <div className={`item ${activeClass}`} onClick={()=> onClick()}>
           {getIcon()}&nbsp;&nbsp;
           {!collapsed && item}
        </div>
        </Link>
    )
}
export default Item;