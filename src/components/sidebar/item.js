import { Link } from "react-router-dom";
const Item = ({item, active, onClick}) => {
    const activeClass = active === item && 'active-item';
    const link = item === 'Dashboard'? '/' : `${item}`

    return (
        <Link to={link}>
        <div className={`item ${activeClass}`} onClick={()=> onClick()}>
           {item}
        </div>
        </Link>
    )
}
export default Item;