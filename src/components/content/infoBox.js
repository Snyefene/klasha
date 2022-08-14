import { months } from "moment";
import Graph from "./Graph";

const InfoBox = (props) => {
    const {period, hasGraph, amount, month} =  props.info
    return (
        <div className="info-box">
            <div>{period}</div>
            {hasGraph && <Graph />}
            <div>{month}</div>
            <div>{amount}</div>
        </div>
    )
}

export default InfoBox