const Bank = require("../Models/bankModel");
const { validationResult } = require('express-validator')

//list all bank
const listBankController = async (req, res) => {
    const banks = await Bank.find({})
    if (banks) {
        return res.json({ message: "bank created successful", data: banks });

    }
    res.json({ message: "not created" });
}
//create bank



const createBankController = (req, res) => {
    //validating 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.json({ message: errors.array()[0].msg })
    }
    const { name, location, branch, phone, address, } = req.body;
    const bank = new Bank({ name, location, branch, phone, address, });
    bank.save();
    res.json({ message: "bank created successful", data: bank });
}


//update bank
const updateBankController = (req, res) => {
    const { name, location, branch, phone, address, accountNumber, _id } = req.body;
    const updateBank = Bank.findByIdAndUpdate(_id, { name, location, branch, phone, address, }, { new: true })
        .then((updateBank) => {
            if (!updateBank) {
                return res.json({
                    message: "bank updated successfully", data: updateBank
                });
            }


        })
        .catch((error) => {
            return res.json({
                message: "some error", data: error
            });
        })

};
//delete bank
const deleteBankController = async (req, res) => {
    const { _id } = req.body;
    const deletedBank = await Bank.findByIdAndDelete({ _id });
    res.json({ message: "bank deleted successful", data: deletedBank });
}


module.exports = {
    //for Banks
    listBankController,
    createBankController,
    updateBankController,
    deleteBankController,
}