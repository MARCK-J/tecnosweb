<?php
include 'config.php';

$sql = "SELECT * FROM actor";
$result = $conn->query($sql);

$actors = array();
while ($row = $result->fetch_assoc()) {
    $actors[] = $row;
}

echo json_encode($actors);
?>
