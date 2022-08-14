import { useState } from 'react';
import './dashboard.scss';
import moment from 'moment';
import { Button } from 'antd';
import { ArrowDownOutlined} from '@ant-design/icons';

import SelectComponent from '../components/Select';
import InfoBox from '../components/content/infoBox';


const Dashboard = () => {
    const [currency, setCurrency] = useState('USD')
    const [activePeriod, setActivePeriod] = useState('7 days')

    const data = [
        {key:1, period:  moment().format('DD-MM-YY'),  hasGraph: false, month:'',  amount: '1,652.50'},
        {key:2, period:  '24 Aug - 01 Sep 21',  hasGraph: true, month:'This month',  amount: '₦1,652.50'},
        {key:3, period:  '24 Aug - 01 Sep 21',  hasGraph: true, month:'This month',  amount: '₦1,652.50'},
        {key:4, period:  '24 Aug - 01 Sep 21',  hasGraph: true, month:'Last month',  amount: '₦1,652.50'},
    ]
    const period_list = ['Sales', '7 days', '30 days']

    return (
        <div className="dashboard">
            <h3>Sales overview</h3>
            <div className='flex-container'>
            { data.map((info) => {return <InfoBox  key={info.key} info={info}/>})}
            </div>
            <div className='sub-section-header'>
              {
                period_list.map((item) =>{
                    return (
                        <span 
                          onClick={()=>setActivePeriod(item)}
                          className={`period-list ${activePeriod === item && 'active-class'}`}>
                         {item}
                     </span>
                    )
                })
              }
              <SelectComponent 
                 value={currency}
                 onChange={(value)=>setCurrency(value)}
              />
              <Button className='download-btn'>
                <ArrowDownOutlined />
                Download report
              </Button>
            </div>
            <div className='bottom-charts-section'>
               <div className='big-chart-box'>
                  Chart here
               </div>
               <div className='action-box'>
                  <div>KlashaWire-send</div>
                  <div>money to businesses</div>
                  <div>globally from Africa</div>

                  <Button className='send-btn'>
                    Send a Wire
                  </Button>
               </div>
            </div>
        </div>
    )
}

export default Dashboard