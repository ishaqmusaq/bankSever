const Account = require("../Models/AccountModel");
const { validationResult } = require('express-validator');

//list all account
const listAccountController = async (req, res) => {
    const accounts = await Account.find({})
    if (accounts) {
        return res.json({ message: "bank created successful", data: accounts });

    }
    res.json({ message: "not created" });
};

//create  Account
const createAccountController = async (req, res) => {

    //validating 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.json({ message: errors.array()[0].msg })
    }

    const {
        accountName,
        accountNumber,
        accountType }
        = req.body;
    const account = await new Account({
        accountName,
        accountNumber,
        accountType,
    });
    account.save();
    res.json({ message: "Account created successful", data: account });
}



//update Account
const updateAccountController = async (req, res) => {
    const {
        accountName,
        accountNumber,
        accountType, _id } = req.body;
    const updateAccount = await Account.findByIdAndUpdate(
        _id,
        {
            accountName,
            accountNumber,
            accountType,
        },
        { new: true })

    if (updateAccount) {
        return res.json({
            message: "Account updated successfully", data: updateAccount
        });
    }

};

//delete Account
const deleteAccountController = async (req, res) => {
    const { _id } = req.body;
    const deletedAccount = await Account.findByIdAndDelete({ _id });
    res.json({ message: "Account deleted successful", data: deletedAccount });


}


module.exports = {

    //for Account
    listAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController
}