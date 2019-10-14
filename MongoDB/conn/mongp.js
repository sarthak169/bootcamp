const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.mongoURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log("hey")

mongoose.connection.on("connected", () => {
  console.log("heyeye");
  console.info('The Db Is connected Successfully');
});
mongoose.connection.on("error", err => {
  console.error(`Error in mongoose connection: ${err.message}`);
});
mongoose.connection.on("diconnected",() =>{
  console.info("The connection is now off!");
});


