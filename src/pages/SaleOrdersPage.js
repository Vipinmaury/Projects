// src/pages/SaleOrdersPage.js

import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import SaleOrderTable from '../components/SaleOrderTable';
import SaleOrderForm from '../components/SaleOrderForm';
//import { fetchSaleOrders } from '../api/apiFunctions'; // Updated import path

const SaleOrdersPage = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [editOrder, setEditOrder] = useState(null);

  const openForm = (order = null) => {
    setEditOrder(order);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditOrder(null);
  };

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    closeForm();
  };

  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button onClick={() => openForm()}>+ Sale Order</Button>
            <SaleOrderTable orders={[]} onEdit={openForm} />
          </TabPanel>
          <TabPanel>
            <SaleOrderTable orders={[]} readOnly />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <SaleOrderForm
        isOpen={isFormOpen}
        onClose={closeForm}
        onSubmit={handleFormSubmit}
        defaultValues={editOrder}
      />
    </>
  );
};

export default SaleOrdersPage;
