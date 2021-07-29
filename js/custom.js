var $border_color = "#F5F8FA";
var $grid_color = "#e1e8ed";
var $default_black = "#666";
var $red = "#E24B46";
var $grey = "#999999";

var $yellow = "#FAD150";
var $pink = "#666";
var $blue = "#d12a16";
var $green = "#6EBB41";

// Mobile Nav
$('#mob-nav').click(function(){
	if($('aside.open').length > 0){
		$( "aside" ).animate({left: "-250px" }, 500 ).removeClass('open');
	} else {
		$( "aside" ).animate({left: "0px" }, 500 ).addClass('open');
	}
});

/* Vertical Responsive Menu */
'use strict';
var tid = setInterval( function () {
	if ( document.readyState !== 'complete' ) return;
	clearInterval( tid );
	var querySelector = document.querySelector.bind(document);
	var nav = document.querySelector('.vertical-nav');

	// Minify menu on menu_minifier click
	querySelector('.collapse-menu').onclick = function () {
		nav.classList.toggle('vertical-nav-sm');
		$('.dashboard-wrapper').toggleClass(('dashboard-wrapper-lg'), 200);
		$("i", this).toggleClass("icon-menu2 icon-cross2");
	};

	// Toggle menu click
	querySelector('.toggle-menu').onclick = function () {
		nav.classList.toggle('vertical-nav-opened');
	};

}, 1000 );


// Sidebar Dropdown Menu
$(function () {
	$('.vertical-nav').metisMenu();
});

;(function ($, window, document, undefined) {

	var pluginName = "metisMenu",
	defaults = {
		toggle: true
	};

	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {
			var $this = $(this.element),
			$toggle = this.settings.toggle;

			$this.find('li.active').has('ul').children('ul').addClass('collapse in');
			$this.find('li').not('.active').has('ul').children('ul').addClass('collapse');

			$this.find('li').has('ul').children('a').on('click', function (e) {
				e.preventDefault();

				$(this).parent('li').toggleClass('active').children('ul').collapse('toggle');

				if ($toggle) {
					$(this).parent('li').siblings().removeClass('active').children('ul.in').collapse('hide');
				}
			});
		}
	};

	$.fn[ pluginName ] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);


function doneFn(){
	$(".addon").show(300);
	$("#sidebar").removeClass('sidebar-nav-sm');
	$("#left-nav a i").removeClass('ion-log-in').animate(200);
	$("#left-nav a i").addClass('ion-log-out').animate(200);
}

// scrollUp full options
$(function () {
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 180, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 300, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationSpeed: 200, // Animation in speed (ms)
		scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
		//scrollTarget: false, // Set a custom target element for scrolling to the top
		scrollText: '<i class="icon-chevron-up"></i>', // Text for element, can contain HTML // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required.
		scrollImg: false, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});
});

// Tooltips
$('a').tooltip('hide');


// Meetings
$( ".meeting-personal" ).click(function() {
	$(this).css('text-decoration', 'line-through');
});


// Loading
$(window).load(function() {
	// Animate loader off screen
	$(".sunrise-loading").fadeOut(1000);
});


// SparkLine Bar
$(function () {
	$('#sale_weekly').sparkline([3,4,5,6,3,4,3,4,5,3,3,2,1,1,1], {
		height: '24',
		type: 'bar',
		barSpacing: 3,
		barWidth: 6,
		barColor: '#FFD300',
		tooltipPrefix: 'Users: '
	});
	$('#sale_weekly').sparkline([3,3,4,5,5,5,4,4,4,3,2,1,1,1,1,1], {
		composite: true,
		height: '30',
		fillColor:false,
		lineColor: '#058DC7',
		tooltipPrefix: 'Sale Online: '
	});

	$('#sale_today').sparkline([2,3,4,5,7,5,4,3,3,2,1,1,2,3], {
		height: '24',
		type: 'bar',
		barSpacing: 3,
		barWidth: 6,
		barColor: '#058DC7',
		tooltipPrefix: 'Users: '
	});
	$('#sale_today').sparkline([1,1,2,3,4,9,9,11,11,13,13,13,10,1], {
		composite: true,
		height: '30',
		fillColor:false,
		lineColor: '#f7b53c',
		tooltipPrefix: 'Sale Online: '
	});

	/*********  add new administrator ***************/

	$("#reg_admin").click(function(){

		var admin_fname = $("#admin_fname").val();
		var admin_lname = $("#admin_lname").val();
		var admin_username = $("#admin_username").val();
		var admin_email = $("#admin_email").val();
		var admin_phone = $("#admin_phone").val();
		var admin_role = $("#admin_role").val();

		$("#reg_admin").html("<i class='fa fa-spinner fa-spin'></i> Proccessing...");

    $.post("scripts.php",
    {
        reg_admin: "yes",
        email: admin_email,
				phone: admin_phone,
        fname: admin_fname,
				lname: admin_lname,
				role: admin_role
    },
    function(data){

			if(data ==='Success')
			{
        $(".form-feedback").html("<div class='alert alert-success'><i class='fa fa-warning'></i> Successfully registered</div>");
				$("#reg_admin").html("Register");
			}else {
				alert("error");
			}

    });

		});


});
