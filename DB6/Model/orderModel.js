const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  items: {
    type: [String], 
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
