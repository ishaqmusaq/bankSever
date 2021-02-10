let mongoose = require('mongoose')
const { Schema } = mongoose;

const AccountSchema = new Schema({

    accountName: String,
    accountNumber: Number,
    accountType:String,
    bankId :{ type: Schema.Types.ObjectId, ref: 'Bank' }
    
});
const Account = mongoose.model("Account", AccountSchema)
module.exports=Account;