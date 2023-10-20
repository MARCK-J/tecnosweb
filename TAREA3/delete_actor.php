<?php
include 'config.php';

$id = $_GET['id'];

$sql = "DELETE FROM actor WHERE actor_id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Actor eliminado correctamente.";
} else {
    echo "Error al eliminar el actor: " . $conn->error;
}

$conn->close();
?>
