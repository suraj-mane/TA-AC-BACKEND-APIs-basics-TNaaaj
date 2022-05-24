var mongoose = require('mongoose');
var schema = mongoose.Schema;

var countrySchema = new schema({
  name:{type:String},
  state:{type:schema.Types.ObjectId, ref:"state"},
  continent:{type:String},
  population:{type:String},
  area:{type:String},
  ethnicity:{type:String},
  neighbouring_countires:{type:schema.Types.ObjectId, ref:"country"},
},{timestamps:true});

module.exports = mongoose.model('country', countrySchema);