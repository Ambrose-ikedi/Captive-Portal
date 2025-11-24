<?php
$username = $_POST['username'];
$password = $_POST['password'];

if ($username == "" || $password == "") {
    echo "Missing credentials";
    exit;
}

// Database check placeholder
// $query = "SELECT * FROM users WHERE email='$username' AND password='$password'";

echo "success"; // return to router for authentication
?>
