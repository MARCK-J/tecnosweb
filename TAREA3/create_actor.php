<?php
include 'config.php';

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];

$sql = "INSERT INTO actor (first_name, last_name) VALUES ('$first_name', '$last_name')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo actor creado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
