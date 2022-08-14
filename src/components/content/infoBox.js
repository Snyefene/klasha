import { months } from "moment";
import Graph from "./Graph";

const InfoBox = (props) => {
    const {period, hasGraph, key, amount, month} =  props.info
    const activeClass = 'darktheme'
    return (
        <div className={`info-box ${key === 2 &&  activeClass}`}>
            <div>{period}</div>
            {hasGraph && <Graph />}
            <div>{month}</div>
            <div className="amount">{amount}</div>
        </div>
    )
}

export default InfoBox