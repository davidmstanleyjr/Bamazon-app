var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    password:"3317",
    database: "bamazon"
});