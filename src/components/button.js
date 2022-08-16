import { Button as ButtonComponent } from "antd";

const Button = ({name, fontSize, iconLocation, icon}) => {
    const style={
        marginLeft:'0px',
        border: '1px solid silver',
        fontSize: fontSize
    }
   return(
    <ButtonComponent style={style}>
      {icon  &&   iconLocation === 'left' && icon}&nbsp;
      {name}&nbsp;
      {icon  &&   iconLocation === 'right' && icon}
    </ButtonComponent>
   )
}
export default Button