<?php
$servername = "localhost";
// $port = "3306";
$username = "root";
$password = "OTOoto123";
$dbname = "products";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$sql = "SELECT * FROM market_products.products";

$result = mysqli_query($conn, $sql);


$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    // echo "id: " . $row["ID"] . " - Name: " . $row["Name"] .  "<br>";
    $data[] = $row;
    // echo json_encode($data);
}

$json = json_encode($data);
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');
echo ($json);


mysqli_close($conn);
