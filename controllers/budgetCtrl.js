const Budget = require('../models/budgetModels')

const showAll = (req, res) => {
    Budget.find({})
}

const showOne = (req, res) => {
    Budget.findById(req.params.id)
}

let createBudget = (req, res) => {
    Budget.create(req.body, (err, budget) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        budget.save()
        res.json(budget)
    })
}

let editBudget = (req,res) => {

}

let deleteBudget = (req, res) => {
    Budget.findByIdAndDelete(req.params.id, (err, budget) => {
        if(err){
            res.json(err)
            return
        }
        res.json({'messege': 'deleted'})
    })
}

module.exports = {
    showAll, 
    showOne,
    createBudget, 
    editBudget, 
    deleteBudget,
}