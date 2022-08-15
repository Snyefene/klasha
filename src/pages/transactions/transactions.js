import './transactions.scss'
import {  Row, Col} from 'antd';
import Button from '../../components/button';
import filter from './../../images/filter.png';
import SearchBar from '../../components/search';
const Transactions = () => {
    const onSearch = (e) => {
       console.log('VALUE', e)
    }

    return (
        <div align="left" className="main-wrap">
         <h3><b>Transaction history</b></h3>
         <Row>
            <Col span={12} align="left">
                <SearchBar 
                 width={140} 
                 onSearch={(e)=>onSearch(e)} 
               />
            </Col>
            <Col span={12} align="right" style={{paddingRight:'40px'}}>
               <Button name='Filter' icon={
                  <img src={filter} style={{width:'10px'}} /> }
               />
               <Button name="Export" />
            </Col>
          </Row>
        </div>
    )
}

export default Transactions