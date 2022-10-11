const mongoose = require('mongoose')



const expenseSchema = new mongoose.Schema({
    title: String,
    biller: String, 
    amountPlanned: Number,
    amountActual: Number,

})

const budgetSchema = new mongoose.Schema({
    title: String, 
    expenses: [expenseSchema]
})

module.exports = mongoose.model('Budget', budgetSchema)