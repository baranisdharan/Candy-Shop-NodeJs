const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('expense',{
    id:{ 
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    candyname:Sequelize.STRING,
    description:Sequelize.STRING,
    sellingprice:Sequelize.INTEGER,
    quantity:Sequelize.INTEGER
});

module.exports=Expense;