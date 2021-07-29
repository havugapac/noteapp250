<?php

function test_data($data)
  {
  require"connection.php";
    $data = trim($data);
    $data = stripslashes($data);
    $data= mysqli_real_escape_string($connection,$data);
    return $data;
  }

?>
