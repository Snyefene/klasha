import React  from 'react';
import {Pagination} from 'antd'
function CustPagination() {
  return (
    <Pagination defaultCurrent={1} total={50} />
  );
}

export default CustPagination