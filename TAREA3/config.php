<?php
$host = "localhost";
$user = "postgres";
$pass = "lolsito101";
$db = "Tarea3";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
