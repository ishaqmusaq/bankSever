const Bank = require("./bankModel");
const Account = require("./AccountModel");

//request handlers/controllers
//list all bank
const listBankController = async (req, res) => {
    const banks = await Bank.find() 
    if (banks) {
        return res.json({ message: "bank created successful", data: banks });

    }
    res.json({ message: "not created" });
}
//create bank
const createBankController = (req, res) => {
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
    //for Banks
    listBankController,
    createBankController,
    updateBankController,
    deleteBankController,
    //for Account
    listAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController
}