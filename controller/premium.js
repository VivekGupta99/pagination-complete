const db = require('../db/connect.js')
const User = db.customers
const Expenses = db.expenses

const getusers = async (req, res) => {
    try {
        const lbofusers = await User.findAll({
            order: [['total_expense', 'DESC']]
        });

        res.status(200).json(lbofusers)
    }
    catch (err) {
        res.status(500).json(err)
    }

}
module.exports = { getusers };