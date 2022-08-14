import './switch.scss'
import { Switch as SwitchComponent } from 'antd';
import React from 'react';



const Switch = ({value, onChange}) => {
    return <SwitchComponent checked={value} onChange={onChange}/>
}
export default Switch
