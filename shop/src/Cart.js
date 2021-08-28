import React from 'react';
import { Table } from 'react-bootstrap';

function Cart() {
  return (
    <>

      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table>

    </>
  )
}

export default Cart;