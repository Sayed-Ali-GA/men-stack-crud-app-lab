const mongoose = require('mongoose');
const carsSchema = new mongoose.Schema({
  Brand: String,
  model: String,
  year: String,
  color: String,
  price: String,
  location: String,
  phoneNumber: String,
  description: String,
  website: String,
  isVerified: {
    type: Boolean,
    default: false
  }
},
{timestamps: true}
);
const Cars = mongoose.model('Cars', carsSchema);
module.exports = Cars;