const { User } = require("../schema/schem.js");
const http = require("http-status-codes");
require("dotenv").config()

module.exports.createUser = (req,res) =>{
  console.log(req.body)
  const newUser = new User({
    fname: req.body.fname,
    lname:req.body.lname,
    phno: req.body.phone,
    add: req.body.add,
    dob: req.body.dob
  });
  newUser.save(function(err,user){
    if(err)
      return res
      .status(http.NOT_FOUND)
      .json({ message: "User cannot be created" ,"err":err});
    res.status(http.OK).json({ user });
  });
};

module.exports.IsBday=(req,res)=>{
  User.findOne({ _id: "5da466f334dcfd15b45ac3cb" }).exec((err, user) => {
    if (err)
      return res
        .status(400)
        .json({ message: "User not defined" });

    // getIfAdult was defines as an instance method earlier in methods/index.js
    res.status(http.OK).json(user.ifBirthday());
  });
};
module.exports.allBirthday = (req, res) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //var yyyy = today.getFullYear();
  today = mm+'-'+dd;
  // It was earlier defined as a static method inside methods/index.js
  User.allBday(today,(err, data)=> {
    if (err)
      return res
        .status(http.BAD_REQUEST)
        .json({ message: "Lastname Mismatch" });
    res.status(http.OK).json({ data });
  });
};
module.exports.getFullName = (req,res) =>{
  console.log("I am in function");
  User.findOne({ _id:"5da466f334dcfd15b45ac3cb"}
    ).exec((err,user)=>{
    if (err) {
      res.status(http.BAD_REQUEST).json({ message: "Internal Error" });
    }
      res.status(http.OK).json({'user':user.fullname});
});
};
