import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const SaleOrderTable = ({ orders, readOnly }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Customer ID</Th>
          <Th>Invoice No</Th>
          <Th>Invoice Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders && orders.map((order) => (
          <Tr key={order.id}>
            <Td>{order.customer_id}</Td>
            <Td>{order.invoice_no}</Td>
            <Td>{order.invoice_date}</Td>
            <Td>
              <IconButton
                icon={<EditIcon />}
                onClick={() => console.log('Edit order', order.id)}
                isDisabled={readOnly}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SaleOrderTable;