//inquirer and mysql variables

const inquirer = require("inquirer");
const mysql = require("mysql");

//connects to mySQL database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "3317",
    database: "bamazon"
});

connection.connect();
//this is the logic for completing an order. 
function myOrder(productObject, productName, productQuantity) {
    var newQuantity = productObject.stock_quantity - productQuantity;
    var sold = productObject.price * productQuantity;
    var firstQuery = "UPDATE products SET stock_quantity = ? where ?";
    var secondQuery = "UPDATE products SET product_sales = ? where ?";
    connection.query(firstQuery, [newQuantity, { product_name: productName }], function (error, res) {
    })
    connection.query(secondQuery, [sold, { product_name: productName }], function (error, res) {

    });
};

//this updates the stock of items in my mysql database.
function removeProduct(productName, productQuantity) {
    connection.query("SELECT * FROM products", function (error, res) {
        if (error) throw error;
        var product;
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === productName) {
                product = res[i]
            }
        }
        //this is the logic for finding the product in the database, displaying the total costs of the purchase 
        //and telling the user that there is insufficient quantity if they order more than what we have in stock.
        console.log(product, "We found the product")
        if (product.stock_quantity >= productQuantity) {
            myOrder(product, productName, productQuantity)
            console.log("Total costs = $", productQuantity * product.price)
        }
        else {
            console.log("insufficient quantity!")
        }
        connection.end()

    })
};


//this is the logic that asks the customer what they want how many they would like.
function myquestions() {
    inquirer.prompt([
        {
            message: "Please type the id of the product you are interested in.",
            type: "input",
            name: "productId"
        },

        {
            message: "How many would you like?",
            type: "input",
            name: "productQuantity"
        }

    ]).then(function (answer) {
        var productId = answer.productId;
        var productQuantity = answer.productQuantity;
        removeProduct(productId, productQuantity)
    }).catch(function (error) { console.log(error) });
}

begin();
//this starts the entire transaction. I originally had all other functions inside of this function. The app wouldn't work as
//a result. I took the other functions out and left this at the end.
function begin() {
    connection.query("SELECT * FROM products", function (error, res) {
        if (error) throw error;
        for (let i = 0; i < res.length; i++) {
            console.log("Id: " + res[i].item_id + "Product: " + res[i].product_name + "Price: " + res[i].price + "This is what we have left for you to purchase: " + res[i].stock_quantity);
        }
    });

    myquestions();





}
