import Chart from "./chart";

const InfoBox = (props) => {
    const {period, hasGraph, key, amount, month} =  props.info
    const activeClass = 'darktheme'
    console.log('PROPSSSS', key)
    return (
        <div className={`info-box ${key === 2 &&  activeClass}`}>
            <div>{period}</div>
             <div >
                {hasGraph && 
                <Chart  
                    chartWidth={200}
                     marginRight={10}
                    container={key} key={key}
                    theme={key === 2? '#000' : '#fff'}
                />}
             </div>
            <div>{month}</div>
            <div className="amount">{amount}</div>
        </div>
    )
}

export default InfoBox