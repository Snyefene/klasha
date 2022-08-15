import { Td , Tr } from 'react-super-responsive-table';

const  Row = ({data}) => {
    const style = {
        height: '50px',
        marginTop: '10px'
    }
    return (
        <Tr style={style}>
            {Object.values(data).map((value) => {
                return <Td  align="left">{value}</Td>
            })}
        </Tr>
    )

}
export default Row;

