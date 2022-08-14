const Item = ({item, active, onClick}) => {
    const activeClass = active === item && 'active-item';
    
    return (
        <div className={`item ${activeClass}`} onClick={()=> onClick()}>
           {item}
        </div>
    )
}
export default Item;