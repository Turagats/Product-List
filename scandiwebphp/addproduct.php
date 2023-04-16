<?php
$servername = "localhost";
$username = "root";
$password = "OTOoto123";
$dbname = "market_products";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$_POST = json_decode(file_get_contents("php://input"), true);

// Collect the data sent from React
$products_sku = $_POST['sku'];
$products_name = $_POST['name'];
$products_price = $_POST['price'];
$products_value = $_POST['value'];
$products_atribute = $_POST['atribute'];




// Prepare the SQL statement
$sql = "INSERT INTO market_products.products (`products_sku`, `products_name`, `products_price`, `products_atribute`, `products_value`) VALUES ('$products_sku', '$products_name', '$products_price', '$products_atribute', '$products_value')";



if (mysqli_query($conn, $sql)) {
  echo "New product added successfully";
} else {
  // throw new Exception("Error receiving data");
  echo "Error Recieving data";
}


header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

mysqli_close($conn);
