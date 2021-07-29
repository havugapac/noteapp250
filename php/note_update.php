<?php 

require "../inc/connection.php";

$field = $_POST['field'];
$value = $_POST['value'];
$editid = $_POST['id'];

$query = "UPDATE notes SET ".$field."='".$value."' WHERE note_id=".$editid;
mysqli_query($connection,$query);

echo 1;
?>