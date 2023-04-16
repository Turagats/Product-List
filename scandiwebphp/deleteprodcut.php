<?php

$servername = "localhost";
$username = "root";
$password = "OTOoto123";
$dbname = "market_products";

// Create connection

$_POST = json_decode(file_get_contents("php://input"), true);


// $productIds = $_POST['productIds'];

$productIds = $_POST["productIDs"];
echo $productIds;

// Delete the products from the database
$conn = mysqli_connect($servername, $username, $password, $dbname);
$sql = "DELETE FROM products WHERE products_id IN (" . implode(',', $productIds) . ")";
mysqli_query($conn, $sql);


header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


mysqli_close($conn);
