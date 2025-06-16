const Order = require('../Model/orderModel');

const addOrder = async (req, res) => {
  try {
    const { customer, total, items, status, orderDate } = req.body;

    if (!customer || !total || !items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Missing or invalid required fields." });
    }

    const newOrder = await Order.create({customer,total,items,status,orderDate   });
    res.status(201).json({
      message: "Order added successfully",
      data: newOrder
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.aggregate([{$match : {}}]);

    if (orders.length === 0) {
      return res.status(404).json({
        message: 'No orders found',
      });}
    
    res.status(200).json({
      message: 'Fetched orders successfully',
      data: orders,
      count : orders.length
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


const getSpecificOrders = async(req, res)=>{
  try {
    // const orders = await Order.aggregate([{$match: {total: {$gt : 150}}}])
    // const orders = await Order.aggregate([{$group: {_id: "$customer", totalSpend: {$sum: "$total"}}}]) 
    //const orders = await Order.aggregate([{$sort: {customer: 1}}])
    //const orders = await Order.aggregate([{$project:{customer: 1, _id: 0}}])
    // const orders = await Order.aggregate([{$limit: 3}])
    // const orders = await Order.aggregate([{$skip: 2}, {$limit: 2}])
    // const orders = await Order.aggregate([{$count: "Customers"}])
    // const orders = await Order.aggregate([{$unwind: "$items"}])
    if(orders.length == 0){
      res.status(404).json({
        message: 'No Orders Found'
      })
    }
    res.status(201).json({
      message: 'Orders Fetched Successfully',
      data : orders
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}
module.exports = { addOrder, getAllOrders, getSpecificOrders};
