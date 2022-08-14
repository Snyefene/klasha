import { Link } from "react-router-dom";
const Item = ({item, active, onClick}) => {
    const activeClass = active === item && 'active-item';
    const link = item === 'Dashboard'? '/' : `${item}`

    return (
        <div className={`item ${activeClass}`} onClick={()=> onClick()}>
          <Link to={link}>{item}</Link>
        </div>
    )
}
export default Item;