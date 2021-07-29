
<!DOCTYPE html>
<html lang="en">

<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<meta name="admin" content="pac" />
		<link rel="shortcut icon" href="img/favicon.png">
		<title>noteapp - 250</title>

		<!-- Bootstrap CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">

		<!-- Main CSS -->
		<link href="css/main.css" rel="stylesheet" media="screen">


				<!-- Data Tables -->
				<link rel="stylesheet" href="css/datatables/dataTables.bs.min.css">
				<link rel="stylesheet" href="css/datatables/autoFill.bs.min.css">
				<link rel="stylesheet" href="css/datatables/fixedHeader.bs.css">

		<!-- Icomoon Icons -->
		<link href="fonts/icomoon/icomoon.css" rel="stylesheet" />

		<!-- fa Icons -->
		<link href="css/font-awesome.min.css" rel="stylesheet" />
		<!-- <script type="text/javascript" src="js/jquery.timeago.js"></script> -->
        <!-- <script type="text/javascript">
		jQuery(document).ready(function() {
  		jQuery("time.timeago").timeago();
		});</script> -->


		<style>
		.notes > a{background-color:#141d28;
		-webkit-transition:all .3s ease-out;
		-moz-transition:all .3s ease-out;
		-ms-transition:all .3s ease-out;
		-o-transition:all .3s ease-out;
		transition:all .3s ease-out;
		color:#fff;
		text-shadow:none}

		.notes:after{position:absolute;
		content:"";
		right:-2px;
		top:10px;
		border-right:11px solid #f3f7fb;
		border-top:11px solid transparent;
		border-bottom:11px solid transparent}

		.notes > a{color:#fff !important;
		text-shadow:none}ul.menu li.notes .down-arrow{-webkit-transition:all 1s ease-in;
		-moz-transition:all 1s ease-in;
		-ms-transition:all 1s ease-in;
		-o-transition:all 1s ease-in;
		transition:all 1s ease-in;
		position:absolute;
		right:15px;
		top:10px;
		font-size:16px}ul.menu li.notes .down-arrow:after{content:"\e963";
		font-family:'icomoon'!important;
		position:absolute;
		top:0;
		right:0;
		color:#8da7c7}
		</style>

		<script src="js/jquery.js"></script>
		<script type="text/javascript">
	
	$('document').ready(function(){
    
    // Add Class
    $('.edit').click(function(){
    	 $(this).addClass('editMode');
    
    });

    // Save data
    $(".edit").focusout(function(){
        $(this).removeClass("editMode");
 
        var id = this.id;
        var split_id = id.split("/");
        var field_name = split_id[0];
        var edit_id = split_id[1];

        var value = $(this).text();
     
        $.ajax({
            url: 'php/note_update.php',
            type: 'post',
            data: { field:field_name, value:value, id:edit_id },
            success:function(response){
                console.log(response);               
            }
        });
                
    });

});

	</script>

	</head>

	<body class="purple">
	
		<!--<div class="sunrise-loading"></div>-->

		<!-- Left sidebar start -->
		<div class="vertical-nav">

			<!-- Sidebar menu start -->
			<?php require"inc/side-bar.php";?>
			<!-- Sidebar menu snd -->

		</div>
		<!-- Left sidebar end -->

		<!-- Dashboard Wrapper Start -->
		<div class="dashboard-wrapper dashboard-wrapper-lg">

			<!-- Header start -->
			<?php require"inc/header.php";?>
			<!-- Header ends -->

			<!-- Top Bar Starts -->
			<?php require"inc/top-bar.php";?>
			<!-- Top Bar Ends -->

			<!-- Main container starts -->
			<div class="main-container">

				<!-- Container fluid Starts -->
				<div class="container-fluid">

					<!-- Row Starts -->
					<div class="row gutter">
						<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12" >
							<div class="panel panel-blue" style="min-height:400px;">
								<div class="panel-heading">
	<h4><b>All Notes</b></h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h4>/Please type in any field you want for data modification</h4>
								</div>
								<div class="panel-body">
									<div class="table-responsive">
										<table id="basicExample" class="table table-striped table-condensed table-bordered no-margin">
											<thead>
											  <tr>
											  <th>N<sup>o</sup></th>
										      <th>Title</th>
										      <th>Body</th>
										      <th>Date</th>
										      <th>Delete</th>
											  </tr>
											</thead>
											<tfoot>
											  <tr>
											 <th>N<sup>o</sup></th>
										      <th>Title</th>
										      <th>Body</th>
										      <th>Date</th>
										      <th>Delete</th>
											  </tr>
											</tfoot>
											<tbody>
		<?php require"inc/connection.php";

if(isset($_GET['id']))
{
$id=$_GET['id'];

mysqli_query($connection,"delete from notes where note_id='$id'") or die(mysqli_error($connection));
}

		$query = mysqli_query($connection,"SELECT * FROM notes ") or die(mysqli_error($connection));
		$a=1;
		while($notes = mysqli_fetch_assoc($query)){
            $id=$notes['note_id'];
			?>
		<tr>
		<td><?php echo $a;?></td>
		<td>
		<div contentEditable='true' class='edit' id='note_title/<?php echo $id; ?>'> <?php print $notes["note_title"];?></div>
	   </td>
		<td>
		<div contentEditable='true' class='edit' id='note_body/<?php echo $id; ?>'> <?php print $notes["note_body"];?></div>				
		</td>
		<td><?php print date('Y-m-d', strtotime($notes["note_date"]));?></td>
		<td>
			<center>
			<a href="?id=<?php echo $id;?>">
			<i class="fa fa-trash"></i>
		    </a>
		    </center>
		</td>
											  </tr>
										  <?php 
										  $a++;
											}?>
											 	</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>

						<!-- end admin list -->

						<!-- start admin registration -->

						<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<div class="panel panel-blue">
								<div class="panel-heading">
									<h4>Add new Note</h4>
								</div>
								<div class="panel-body">
			<?php require "php/add_note.php";?>
			<form class="" action="" method="post">
			<div class="form-feedback"></div>
			<div class="form-group">
			<input type="text" class="form-control" name="title" value="" placeholder="Enter note Title" id="title" required>
			</div>
		    <div class="form-group">
		    <p>Enter the note's body:</p>
			<textarea rows="5" style="width:100%;" name="body">
				
			</textarea>
			</div>
			
			<div class="form-group">
			<button type="text" name="reg_note" class="btn btn-default btn-block" id="reg_note">Register</button>
			</div>
			</form>
								</div>
							</div>
						</div>

					</div>
					<!-- Row Ends -->

				</div>
				<!-- Container fluid ends -->
			</div>
			<!-- Main container ends -->

      		<!-- Footer Start -->
			<?php require"inc/footer.php";?>
			<!-- Footer end -->

		</div>
		<!-- Dashboard Wrapper End -->


		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>

		<!-- Sparkline graphs -->
		<script src="js/sparkline.js"></script>

		<!-- Data Tables -->
		<script src="js/datatables/dataTables.min.js"></script>
		<script src="js/datatables/dataTables.bootstrap.min.js"></script>
		<script src="js/datatables/autoFill.min.js"></script>
		<script src="js/datatables/autoFill.bootstrap.min.js"></script>
		<script src="js/datatables/fixedHeader.min.js"></script>
		<script src="js/datatables/custom-datatables.js"></script>

		<!-- jquery ScrollUp JS -->
		<script src="js/scrollup/jquery.scrollUp.js"></script>

		<!-- Custom JS -->
		<script src="js/custom.js"></script>
	</body>

</html>
