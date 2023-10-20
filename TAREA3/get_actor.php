<?php
include 'config.php';

$id = $_GET['id'];

$sql = "SELECT * FROM actor WHERE actor_id = $id";
$result = $conn->query($sql);

$actor = $result->fetch_assoc();

echo json_encode($actor);
?>
