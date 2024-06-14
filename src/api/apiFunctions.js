// src/api/apiFunctions.js

const activeSaleOrders = [
    { id: 1, name: 'Order 1', status: 'active' },
    { id: 2, name: 'Order 2', status: 'active' },
    // Add more active orders if needed
  ];
  
  const completedSaleOrders = [
    { id: 3, name: 'Order 3', status: 'completed' },
    { id: 4, name: 'Order 4', status: 'completed' },
    // Add more completed orders if needed
  ];
  
  export const fetchSaleOrders = async () => {
    // Simulate fetching active and completed orders
    return { activeOrders: activeSaleOrders, completedOrders: completedSaleOrders };
  };
  