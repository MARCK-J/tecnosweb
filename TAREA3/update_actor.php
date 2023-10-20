<?php
include 'config.php';

$id = $_GET['id'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];

$sql = "UPDATE actor SET first_name='$first_name', last_name='$last_name' WHERE actor_id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Actor actualizado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
