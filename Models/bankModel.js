let mongoose = require('mongoose')
const { Schema } = mongoose;

const BankSchema = new Schema({

    name: String,
    location: String,
    branch: String,
    phone: {
        type:String,
        required:true
    },
    address: String,
    accounts :[{ type:mongoose. Schema.Types.ObjectId, ref: 'Account' }]
});
const Bank = mongoose.model("Bank", BankSchema)
module.exports=Bank;

// let bankDatabase=require("./database");
// //bank model
// class BanksModel {
//     constructor({ name, location, branch, phone, address, accountNumber }) {
//         this.name = name;
//         this.location = location;
//         this.branch = branch;
//         this.phone = phone;
//         this.address = address;
//         this.accountNumber = accountNumber;
//     };
//     save() {
//         bankDatabase.push(this);
//         return this;
//     }
//     static all() {
//         return bankDatabase;
//     }

//     static update(updateInfo = {}) {
//         bankDatabase =  bankDatabase.map(bank => {
//             if (bank.name === updateInfo.name) {
//                 return { ...bank, ...updateInfo };
//             };
//             return bank;
//         })


//     }

//     static delete({ name }) {
//         let deletedBank = null;
//         bankDatabase = bankDatabase.filter(bank => {
//             console.log(bank.name === name)
//             if (bank.name !== name) {

//                 return true;
//             };
//             deletedBank = bank;
//             return false;
//         });
//         return deletedBank;
//     };


// };

// module.exports=BanksModel