var mongoose = require('mongoose');
var schema = mongoose.Schema;

var stateSchema = new schema({
  name_of_state:{type:String},
  country:{type:schema.Types.ObjectId, ref:"country"},
  population:{type:String},
  area:{type:String},
  neighbouring_states:{type:String}
}, {timestamps:true})


module.exports = mongoose.model("state", stateSchema);