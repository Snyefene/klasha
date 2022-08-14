import './dashboard.scss';
import moment from 'moment';
import InfoBox from '../components/content/infoBox';


const Dashboard = () => {

    const data = [
        {key:1, period:  moment().format('DD-MM-YY'),  hasGraph: false, month:'',  amount: '1,652.50'},
        {key:1, period:  '24 Aug - 01 Sep 21',  hasGraph: true, month:'This month',  amount: '1,652.50'},
        {key:1, period:  '24 Aug - 01 Sep 21',  hasGraph: true, month:'This month',  amount: '1,652.50'},
        {key:1, period:  '24 Aug - 01 Sep 21',  hasGraph: true, month:'Last month',  amount: '1,652.50'},
    ]

    return (
        <div className="dashboard">
            <h3>Sales overview</h3>
            <div className='flex-container'>

            { data.map((info) => {return <InfoBox  key={info.key} info={info}/>})}
            </div>
        </div>
    )
}

export default Dashboard