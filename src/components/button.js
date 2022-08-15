import { Button as ButtonComponent } from "antd";

const Button = ({name, icon}) => {
    const style={
        marginLeft:'10px',
        border: '1px solid silver',
    }
   return(
    <ButtonComponent style={style}>
      {name}&nbsp;&nbsp;{icon && icon}
    </ButtonComponent>
   )
}
export default Button