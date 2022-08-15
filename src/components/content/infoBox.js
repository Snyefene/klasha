import { months } from "moment";
import Chart from "./chart";

const InfoBox = (props) => {
    const {period, hasGraph, key, amount, month} =  props.info
    const activeClass = 'darktheme'
    console.log('PROPSSSS', key)
    return (
        <div className={`info-box ${key === 2 &&  activeClass}`}>
            <div>{period}</div>
            {hasGraph && 
              <Chart  
                 container={key} key={key}
                theme={key === 2? '#000' : '#fff'}
            />}
            <div>{month}</div>
            <div className="amount">{amount}</div>
        </div>
    )
}

export default InfoBox