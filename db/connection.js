var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:voting");

module.exports = mongoose;
