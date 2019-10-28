DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  order_numbers INT NULL,
  PRIMARY KEY (item_id)
);



INSERT INTO products
  (product_name,department_name,price,stock_quantity)
VALUES
  ("Sony Playstation 4", "Video Games", 282.00, 10),
  ("Microsoft Xbox One S", "Video Games", 275.00, 15),
  ("Apple Iphone 11", "Tech", 700.00, 20),
  ("2019 HP Pavillion Laptop", "Tech", 1,400.00, 25),
  ("Everyone Coconut and Lemon Lotion", "Personal Stuff", 18.68, 30),
  ("Neutrogena Norwegian Formula Lotion", "Personal Stuff", 14.99, 35),
  ("Miss Jessie's Multicultural Curls", "Personal Stuff", 15.00, 70),
  ("Cantu Curl Activator", "Personal Stuff", 50.00, 100),
  ("Philosophy Microdelivery Exfoliating Wash", "Personal Stuff", 35.00, 35),
  ("Mane n Tail leave in conditioner", "Personal Stuff", 10.00, 20);