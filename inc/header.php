<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/jquery.js"></script>

<script type="text/javascript">
	jQuery(document).ready(function() {

			//startTime();

		$(".search-query").keypress(function(){

			var query = $(".search-query").val();


			$.post("search.php",{ search:'yes', query: query},

		 	function(data) {

				//alert(data);

				$("#search-results").load("search.php");

	 		});

			$(".search-results-container").show(500);
		});
	});
</script>

<script>
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
	// add zero in front of numbers < 10
  return i;
}
</script>

<!-- Header start -->
			<header>
				<div class="custom-search hidden-sm hidden-xs pull-left">
					<input type="text" class="search-query" placeholder="Search here ...">
					<i class="icon-search4"></i>
				</div>
				<span class="badge label-danger" style="position:absolute;top:23px"> New</span>

				<div id='search-results'>

				</div>

				<ul class="pull-left" id="left-nav">
					<li class="dropdown pull-left">

						<!--
						<ul class="dropdown-menu fadeInUp animated messages">

							<li class="dropdown-header">Meetings today</li>

							<li>
								<div class="meeting-container">
									<div class="meeting-block">
										<div class="meeting-with">
											<img src="img/user.png" alt="BridgEd Admin">
										</div>
										<div class="meeting-personal line-through">
											<h5>Alexey Anatolievich <span>@11:30am</span></h5>
											<span>CTO</span>
										</div>
									</div>
									<div class="meeting-block">
										<div class="meeting-with">
											<img src="img/user.png" alt="BridgEd Admin">
										</div>
										<div class="meeting-personal">
											<h5>Ron Evgeniy <span>@12:45pm</span></h5>
											<span>COO</span>
										</div>
									</div>
									<div class="meeting-block no-border">
										<div class="meeting-with">
											<img src="img/user.png" alt="BridgEd Admin">
										</div>
										<div class="meeting-personal">
											<h5>Kasper Christensen <span>@3:15pm</span></h5>
											<span>VC</span>
										</div>
									</div>
									<div class="group-meeting">
										<h5>Meeting about our new product</h5>
										<p class="meeting-day">Today, @4:30pm</p>
										<div class="meeting-with">
											<img src="img/user.png" alt="BridgEd Admin">
											<img src="img/user.png" alt="BridgEd Admin">
											<img src="img/user.png" alt="BridgEd Admin">
											<span class="total-users">+6</span>
										</div>
									</div>
								</div>
							</li>
						</ul>-->

					</li>
				</ul>
				<div class="pull-right">
					<ul id="mini-nav" class="clearfix">

						<li class="list-box dropdown hidden-xs">
							<a id="reviews" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
								<i class="icon-globe2"></i>
							</a>
							<span class="noti-label yellow-bg animated"></span>
							<!--
							<ul class="dropdown-menu animated fadeInUp reviews">
								<li>
									<div class="user-pic clearfix">
										<img src="img/user.png" alt="User Image">
									</div>
									<div class="review-details clearfix">
										<h4>Social Analytics <i class="icon-settings"></i></h4>
										<h5 class="clearfix">
											<span class="left-info">
												<i class="icon-photo"></i> 0
											</span>
										</h5>
									</div>
								</li>
								<li>
									<div class="user-pic clearfix">
										<img src="img/user.png" alt="User Image">
									</div>
									<div class="review-details clearfix">
										<h4>Product Analytics <i class="icon-settings"></i></h4>
										<h5 class="clearfix">
											<span class="left-info">
												<i class="icon-photo"></i> 0
											</span>
										</h5>
									</div>
								</li>
								<li>
									<div class="user-pic clearfix">
										<img src="img/user.png" alt="User Image">
									</div>
									<div class="review-details clearfix">
										<h4>Layouts <i class="icon-settings"></i></h4>
										<h5 class="clearfix">
											<span class="left-info">
												<i class="icon-photo"></i> 0
											</span>
										</h5>
									</div>
								</li>
							</ul>-->

						</li>
						<!--<li class="list-box dropdown hidden-xs">
							<a id="drop1" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
								<i class="icon-notifications_active"></i>
							</a>
							<span class="info-label blue-bg animated rubberBand">0</span>-->
							<!--
							<ul class="dropdown-menu fadeInUp animated imp-notify">
								<li class="dropdown-header">You have 3 notifications</li>
								<li class="clearfix">
									<div class="icon">
										<img src="img/user.png" alt="BridgEd Admin">
									</div>
									<div class="details">
										<strong class="text-danger">Rogie King</strong>
										<span>Firefox is a free, open-source web browser from Mozilla.</span>
									</div>
								</li>
								<li class="clearfix">
									<div class="icon">
										<img src="img/user.png" alt="BridgEd Admin">
									</div>
									<div class="details">
										<strong class="text-success">Dan Cederholm</strong>
										<span>IE is a free web browser from Microsoft.</span>
									</div>
								</li>
								<li class="clearfix">
									<div class="icon">
										<img src="img/user.png" alt="BridgEd Admin">
									</div>
									<div class="details">
										<strong class="text-info">Justin Mezzell</strong>
										<span>Safari is known for its sleek design and ease of use.</span>
									</div>
								</li>
								<li class="dropdown-footer">See all the notifications<i class="icon-arrow_forward"></i></li>
							</ul>
						</li>
						<li class="list-box dropdown hidden-xs">
							<a id="drop10" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
								<i class="icon-circle-check"></i>
							</a>
							<span class="info-label red-bg animated rubberBand">0</span>-->
							<!--
							<ul class="dropdown-menu animated flipInY progress-stats">
								<li class="dropdown-header">You have 7 pending tasks</li>
								<li>
									<div class="progress-info">
										<strong class="text-danger">Critical</strong>
										<span>New Dashboard Design</span>
										<span class="pull-right text-danger">20%</span>
									</div>
									<div class="progress progress-md no-margin">
										<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
											<span class="sr-only">20% Complete (success)</span>
										</div>
									</div>
								</li>
								<li>
									<div class="progress-info">
										<strong class="text-info">Primary</strong>
										<span>UI Changes in V2</span>
										<span class="pull-right">90%</span>
									</div>
									<div class="progress progress-sm no-margin">
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
											<span class="sr-only">90% Complete</span>
										</div>
									</div>
								</li>
								<li>
									<div class="progress-info">
										<strong class="text-warning">Urgent</strong>
										<span>Bug Fix #123</span>
										<span class="pull-right">60%</span>
									</div>
									<div class="progress progress-xs no-margin">
										<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
											<span class="sr-only">60% Complete (warning)</span>
										</div>
									</div>
								</li>
								<li>
									<div class="progress-info">
										<span>Bug Fix #111</span>
										<span class="pull-right text-success">Complete</span>
									</div>
									<div class="progress progress-xs no-margin">
										<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
											<span class="sr-only">100% Complete (warning)</span>
										</div>
									</div>
								</li>
								<li class="dropdown-footer">See all the notifications</li>
							</ul>
						</li>-->

						<li class="list-box dropdown hidden-xs">
							<a href="#">
								<i class="icon-exit_to_app"></i>
							</a>
						</li>

						<li class="list-box hidden-lg hidden-md">
							<button type="button" id="toggleMenu" class="toggle-menu">
								<i class="icon-menu"></i>
							</button>
						</li>
					</ul>
				</div>

			</header>
			<!-- Header ends -->
