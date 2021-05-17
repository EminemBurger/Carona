const mongoose = require("mongoose");


const MapSchema = new mongoose.Schema({
  data: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Maptable', MapSchema);