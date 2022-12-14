
import { Select } from "antd"

const { Option} = Select;

const style={
    width:'80px',
    borderRadius: '30px',
    border: '1px solid silver '
}

const SelectComponent = ({value, onChange}) => {
    return(
        <Select  style={style} className="select-comp"  defaultValue={value}  onChange={onChange}>
            <Option value="usd">USD</Option>
            <Option value="naira">Naira</Option>
            <Option value="ghc">GHC</Option>
        </Select>
    )
}
export default SelectComponent