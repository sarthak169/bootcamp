const {userSchema} = require("../schema/schem.js");

userSchema.methods.ifBirthday = function() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()+ 1).padStart(2, '0'); //January is 0!
  //var yyyy = today.getFullYear();
  var db = this.dob;
  var newdb = db.substring(5,);
  today = mm + '-' + dd;
  console.log(today);
  console.log(newdb);
  if( newdb == today){return "Happy Birthday      "+this.fname;}
  else{return "No birthday";}
};
userSchema.statics.allBday = function(day,callback){
  console.log(day);
return this.find({dob: new RegExp(day)},callback);
}

userSchema.virtual("fullname").get(function(){
  console.log('this');
  return this.fname+" "+this.lname;
});