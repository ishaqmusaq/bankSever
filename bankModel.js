const mongoose= require ('mongoose');
  const { Schema } = mongoose;

  const Bankchema = new Schema({

    name:  String, // String is shorthand for {type: String}
    location: String,
    branch:   String,
    phone:  Number, 
    address: String,
    accountName:   Number,

  })
  const Bank  = mongoose.model('/bank',Bankchema)
  module.exports=Bank



// let bankDatabase=require("./database");
//bank model
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