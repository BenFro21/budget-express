const Budget = require('../models/budgetModels')

const showAll = (req, res) => {
    Budget.find({})
}