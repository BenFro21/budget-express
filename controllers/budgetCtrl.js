const Budget = require('../models/budgetModels')

const showAll = (req, res) => {
    Budget.find({}, (err, budgets) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(budgets)
    })
}

const showOne = (req, res) => {
    Budget.findById(req.params.id, (err, budget) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(budget)
    })
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
    Budget.findByIdAndUpdate(req.params.id, (err, budget) => {
        if(err){
            res.status(400).json(err)
            return
        }
        budget.save()
        res.json(budget)
    })
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