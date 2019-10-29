var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    password:"3317",
    database: "bamazon"
});

connection.connect();

begin ()

function begin () {
connection.query("SELECT * FROM products", function (error, res) {
    if(error) throw error;
    res.forEach(row => {
        console.log("Id: ${row.item_id} Name: ${row.product_name} Price: ${row.price}\n"))
    });

    myquestions()

    function myquestions() {
        inquirer.prompt([
            {
                
            }
        ])
    }
})
}

