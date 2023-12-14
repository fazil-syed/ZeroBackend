const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  foodCategory:{
    type: String,
    required: true
  },
  foodName: {
    type: String,
    required: true
  },
  qty:{
    type: String,
    required: true
  },
  phoneNumber:{
    type: String,
    required: true
  } ,
  address: {
      type: String, 
      required: true
    },
    completed:{
      type: Boolean,
      default: false
    },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
