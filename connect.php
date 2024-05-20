<?php
// Database connection parameters
$serverName = "1000RND2004577"; // Replace with your SQL Server instance name
$connectionOptions = array(
    "Database" => "curology", // Replace with your database name
    "Authentication" => 'Windows', // Use Windows authentication
    "ReturnDatesAsStrings" => true // Return dates as strings to avoid conversion issues
);

// Establishes the connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die("Connection failed: " . print_r(sqlsrv_errors(), true));
}

// Check connection
if (!$conn) {
    die("Connection failed: " . sqlsrv_errors());
}

// Retrieve form data
$email = $_POST['username'];
$password = $_POST['password'];

// SQL insert statement
$sql = "INSERT INTO signUpDetails (userName, confirmPassword) VALUES (?, ?)";
$params = array($email, $password);
$stmt = sqlsrv_query($conn, $sql, $params);

// Check if insert was successful
if ($stmt === false) {
    die("Insert failed: " . print_r(sqlsrv_errors(), true));
} else {
    echo "User signed up successfully!";
}

// Close connection
sqlsrv_close($conn);
?>
