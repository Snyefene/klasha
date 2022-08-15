
import React from 'react';
import './table.scss'
import { Table as TableComponent, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import Th from './th';
import Row from './row';
import transactions from '../../data/transactions';
import Transactions from '../../pages/transactions/transactions';
import CustPagination from './pagination';

export default function Table(props) {
  const columns = [
    'Transaction Id', 'Source', 'Customer name', 'Customer email', 'Amount',
    'Request date', 'Statue'
  ]
  return (
    <div>
      <TableComponent className="transactinos-table">
       <Thead>
        <Tr align="left">
          {
            columns.map((col) => {
              return <Th>{col}</Th>

            })
          }
        </Tr>
      </Thead>
      <Tbody>
        {
          transactions.map((t) => {
            return (
              <Tr>
              <Td>{t.id}</Td>
              <Td>{t.source}</Td>
              <Td>{t.name}</Td>
              <Td>{t.email}</Td>
              <Td>{t.amount}</Td>
              <Td>{t.date}</Td>
              <Td>{t.status}</Td>
            </Tr>
            )
          })
        }
      </Tbody>
     </TableComponent>
     <div  className="pagination" align="right">
       <CustPagination  />
     </div>
    </div>
  );
}

