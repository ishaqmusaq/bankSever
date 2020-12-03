const BanksModel=require("./bankModel");
//request handlers/controllers
//list all bank
const listBankController = (req, res) => {
    const banks = BanksModel.all();
    res.json({ data: banks });
}
//create bank
const createBankController = (req, res) => {
    const { name, location, branch, phone, address, accountNumber } = req.body;
    const bank = new BanksModel({ name, location, branch, phone, address, accountNumber });
    bank.save();
    res.json({ message: "bank created successful", data: bank });
}


//update bank
const updateBankController = (req, res) => {
    const { name, location, branch, phone, address, accountNumber } = req.body;
    const updateBank = BanksModel.update({ name, location, branch, phone, address, accountNumber });
    res.json({ message: "bank updated successful", data: updateBank });

}
//delete bank
const deleteBankController = (req, res) => {
    const { name } = req.body;
    const deletedBank = BanksModel.delete({ name });
    res.json({ message: "bank deleted successful", data: deletedBank });
}

module.exports={
    listBankController,createBankController,updateBankController,deleteBankController
}