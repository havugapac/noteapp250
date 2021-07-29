$('.carousel').carousel();

//Map JS
google.load('maps', '3', {
	other_params: 'sensor=false'
});
google.setOnLoadCallback(initialize);

function initialize() {
	var center = new google.maps.LatLng(32.4419, -75.1419);

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		minZoom: 1,
		scrollwheel: false,
		disableDefaultUI: true,
		center: center,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{
				"featureType": "landscape.natural",
				"elementType": "geometry.fill",
				"stylers": [
					{ "color": "#F5F8FA" }
				]
			},
			{
				"featureType": "landscape.man_made",
				"stylers": [
					{ "color": "#CCCED0" },
					{ "visibility": "off" }
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{ "color": "#ffffff" },  // applying map water color
					{ "saturation": 0 }
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{ "color": "#808080" }
				]
			}
			,{
				"elementType": "labels.text.stroke",
				"stylers": [
					{ "visibility": "off" }
				]
			}
			,{
				"elementType": "labels.text",
				"stylers": [
					{ "color": "#333333" }
				]
			}
			,{
				"featureType": "poi",
				"stylers": [
					{ "visibility": "off" }
				]
			}
		]
	});

	var markers = [];
	for (var i = 0, dataPhoto; dataPhoto = data.photos[i]; i++) {
		var latLng = new google.maps.LatLng(dataPhoto.latitude,
				dataPhoto.longitude);
		var marker = new google.maps.Marker({
			position: latLng,
			//This will be the fallback if content
			title: "This is a title for the marker.",
			content: "<b>This is HTML Content we use instead of the Marker Title for the mass infowindow.</b><br>"
		});
		
		markers.push(marker);
	}
	
	var mcOptions = {
			infoOnClick: true, 
			infoOnClickZoom: 7
	};
	
	var markerCluster = new MarkerClusterer(map, markers, mcOptions);
}


// Sparkline Graphs
$(function () {

	$("#total-applications").sparkline([212,257,284,315,365,383,358,371,329,295,321,392,316,423,477,495,419], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 40,
		width: 180,
		spotRadius: 5,
	});
});


// Sparkline Graph
$(function () {

	$("#demographyFemale").sparkline([280,320,220,385,450,320,250,400,280,320,220,385,450,320], {
		type: 'bar',
		barWidth: 3,
		height: 60,
		width: 200,    
		barSpacing: 5,
		barColor: '#177bbb',
		negBarColor: '#ffffaa'
	});
	$('#demographyMale').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#F782AA',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 60,
		width: 200,
		spotRadius: 6,
	});

	$('#rowOne').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 18,
		width: 80,
		spotRadius: 3,
	});
	$('#rowTwo').sparkline([230,210,315,190,250,200,330,280,350], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 18,
		width: 80,
		spotRadius: 3,
	});

	$("#fb-stats").sparkline([6,9], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#tw-stats").sparkline([34,15], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#link-stats").sparkline([12,7], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#gplus-stats").sparkline([2,12], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#pint-stats").sparkline([7,19], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});

	$('#goog').sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#aapl").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#nasdaq").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#yahw").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#sun").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

});



// Sparkline Graphs
$(function () {

	$("#total-applications").sparkline([212,257,284,315,365,383,358,371,329,295,321,392,316,423,477,495,419], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 40,
		width: 180,
		spotRadius: 5,
	});
});


// Sparkline Graph
$(function () {

	$("#demographyFemale").sparkline([280,320,220,385,450,320,250,400,280,320,220,385,450,320], {
		type: 'bar',
		barWidth: 3,
		height: 60,
		width: 200,    
		barSpacing: 5,
		barColor: '#177bbb',
		negBarColor: '#ffffaa'
	});
	$('#demographyMale').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#F782AA',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 60,
		width: 200,
		spotRadius: 6,
	});

	$('#rowOne').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 18,
		width: 80,
		spotRadius: 3,
	});
	$('#rowTwo').sparkline([230,210,315,190,250,200,330,280,350], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 18,
		width: 80,
		spotRadius: 3,
	});

	$("#fb-stats").sparkline([6,9], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#tw-stats").sparkline([34,15], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#link-stats").sparkline([12,7], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#gplus-stats").sparkline([2,12], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});
	$("#pint-stats").sparkline([7,19], {
		type: 'pie',
		width: '24',
		height: '24',
		sliceColors: ['#058DC7','#F782AA'],
	});

	$('#goog').sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#aapl").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#nasdaq").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#yahw").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#sun").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

});

//Todo List
$( '.todo-list' ).on( 'click', 'li.list', function() {
	$(this).toggleClass('completed' );
});

//Scrollbar
$(function(){
	$('#scrollbar').tinyscrollbar();
});