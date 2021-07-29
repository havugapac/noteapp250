<?php
require "inc/connection.php";
require "test_data.php";

if(isset($_POST['reg_note']))
{
$title = test_data($_POST['title']);
$body = test_data($_POST['body']);

$ins_note=mysqli_query($connection,"INSERT INTO `notes`(`note_title`, `note_body`) VALUES ('$title','$body')") or die(mysqli_error($connection));

if($ins_note)
{
?>
<div class=" alert alert-success"><i class="fa fa-check"></i>Success! New note has been successfully registered</div>
<script>

setTimeout(function()
				{
				window.location="index.php";	
			},2000);
</script>
<?php

}

}

?>