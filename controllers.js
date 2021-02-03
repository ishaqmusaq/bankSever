const Bank=require("./bankModel");
//request handlers/controllers
//list all bank
const listBankController = (req, res) => {
    const banks = Bank.all();
    res.json({ data: banks });
}
//create bank
const createBankController = (req, res) => {
    const { name, location, branch, phone, address, accountNumber } = req.body;
    const bank = new Bank({ name, location, branch, phone, address, accountNumber });
    bank.save();
    res.json({ message: "bank created successful", data: bank });
}


//update bank
const updateBankController = (req, res) => {
    const { name, location, branch, phone, address, accountNumber } = req.body;
    const updateBank = Bank.update({ name, location, branch, phone, address, accountNumber });
    res.json({ message: "bank updated successful", data: updateBank });

}
//delete bank
const deleteBankController = (req, res) => {
    const { name } = req.body;
    const deletedBank = Bank.delete({ name });
    res.json({ message: "bank deleted successful", data: deletedBank });
}

module.exports={
    listBankController,createBankController,updateBankController,deleteBankController
}