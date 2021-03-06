const dbConnection = require('../../config/database');
const ExpenseDAO = require('../model/ExpenseDAO');
const ObjectId = require('mongodb').ObjectId;


module.exports.getAllExpenses = (req, res) => {

    let expenseDAO = new ExpenseDAO(dbConnection.getDb());
    expenseDAO.getAllExpenses(req, res);

};

module.exports.insertExpenses = (req, res) => {

    let userId = {
                  _id: ObjectId('597feceebf4606bb4b01201b')//req.session.userId
                 };

    let expenseInfo = {
                      ownerId: ObjectId('597feceebf4606bb4b01201b')/*userId._id*/,
                      month: parseInt(req.body.month),
                      year: parseInt(req.body.year),
                      value: parseFloat(req.body.value),
                      description: req.body.description
                     };


    let expenseDAO = new ExpenseDAO(dbConnection.getDb());
    expenseDAO.insertExpenses(req, res, userId, expenseInfo);

};

module.exports.updateExpenses = (req, res) => {

    let expenseId = {
                    _id: ObjectId('597fee93f7b0ffbbcb03bc0d')//req.params._id
                   };
    let updateInfo = req.body;

    let expenseDAO = new ExpenseDAO(dbConnection.getDb());
    expenseDAO.updateExpenses(req, res, expenseId, updateInfo);

};

module.exports.removeExpenses = (req, res) => {

    let expenseId = {
                      _id: ObjectId('597fee93f7b0ffbbcb03bc0d')//req.params._id
                     };

    let expenseDAO = new ExpenseDAO(dbConnection.getDb());
    expenseDAO.removeExpenses(req, res, expenseId);

};