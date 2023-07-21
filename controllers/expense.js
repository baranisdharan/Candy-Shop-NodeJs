const Expense = require('../models/Expense')

exports.addExpense = async (req, res) => {  
  try {
    const candyname = req.body.candyname;
    const description = req.body.description;
    const sellingprice = req.body.sellingprice;
    const quantity = req.body.quantity;
    const data = await Expense.create({candyname:candyname, description: description, sellingprice: sellingprice, quantity: quantity })
    res.status(201).json(data)
  }
  catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.getExpense = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses)
  } catch (error) {
    console.log("error in find all elements")
    res.status(500).json({ error: error })
  }
}

exports.updateExpense = (req, res) => {
  const uId = req.params.id;
  const { candyname, description, sellingprice, quantity } = req.body;
  Expense.findByPk(uId)
    .then(expense => {
      if (expense) {        
        expense.candyname = candyname;
        expense.description = description;
        expense.sellingprice = sellingprice;
        expense.quantity = quantity;        
        return expense.save();
      } else {
        throw new Error("Expense not found.");
      }
    })
    .then(updatedExpense => {      
      res.status(200).json(updatedExpense.toJSON());
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
};
