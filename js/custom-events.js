var $danger = "#D66061";
var $yellow = "#ffee00";


//Jquery vector map
$(function(){
	var cityAreaData = [
		230.20,
		750.90,
		440.28,
		180.15,
		69.35,
		280.90,
		510.50,
		99.60,
		135.50
	]
	$('#us-map').vectorMap({
		map: 'us_aea_en',
		scaleColors: ['$black', '$danger'],
		normalizeFunction: 'polynomial',
		focusOn:{
			x: 1,
			y: 0,
			scale: 1.2
		},
		zoomOnScroll:false,
		zoomMin: 1,
		hoverColor: true,
		regionStyle:{
			initial: {
				fill: '#0084b4',
				"fill-opacity": 0.9,
				"stroke-width": 0,
				"stroke-opacity": 0
			},
			hover: {
				fill: '#EC7343',
			},
			selected: {
				fill: $yellow,
			},
		},
		markerStyle: {
			initial: {
				fill: $yellow,
				stroke: $yellow,
				"fill-opacity": 1,
				"stroke-width": 10,
				"stroke-opacity": 0.5,
				r: 3
			},
			hover: {
				stroke: 'black',
				"stroke-width": 3
			},
			selected: {
				fill: $yellow
			},
			selectedHover: {
			}
		},
		backgroundColor: "#F7FAFC" ,
		 markers :[
			{latLng: [32.90, -92.03], name: 'Dallas,TX : 21'},
			{latLng: [34.11, -79.24], name: 'Marion S.C : 34'},
			{latLng: [40.09, -74.51], name: 'Levittown, Pa: 11'},
			{latLng: [32.33, -92.55], name: 'Arcadia, La: 15'},
			{latLng: [35.53, -11.25], name: 'Cameron, Ariz: 21'},
			{latLng: [39.46, -86.09], name: 'Indianapolis: 33'},
			{latLng: [38.32, -82.41], name: 'Ironton, Ohio: 11'},
			{latLng: [38.50, -104.49], name: 'Colorado Springs: 10'},
			{latLng: [45.14, -120.11], name: 'Condon: 45'},
			{latLng: [19.12, -155.29], name: 'Pahala: 18'},
			{latLng: [64.44, -120.17], name: 'Los Alamos, Calif: 12'},
			{latLng: [70.10, -105.06], name: 'Longmont: 10'},
			{latLng: [57.05, -134.50], name: 'Baranof: 13'},
			{latLng: [37.30, -119.30], name: 'California, CA: 16'},
			{latLng: [36.10,-115.09], name: 'Las Vegas, Nev: 15'},
			{latLng: [56.48, -132.58], name: 'Petersburg, Alaska: 18'},
			{latLng: [29.35, -95.46 ], name: 'Richmond Tex: 16'},
			{latLng: [31.02, -85.52], name: 'Geneva, Ala: 24'},
			{latLng: [42.11, -73.30], name: 'Hillsdale, N.Y: 25'},
			{latLng: [48.30, -122.14], name: 'Sedro Wooley: 13'},
			{latLng: [32.46, -108.17], name: 'Silver City: 26'},
			{latLng: [43.25, -74.22], name: 'Hamilton Mt.: 36'},
			{latLng: [32.42, -108.08], name: 'Hurley, N. Mex: 45'},
			{latLng: [35.22, -117.38], name: 'Johannesburg: 55'},
			{latLng: [40.50, -79.38], name: 'Worthington Pa: 22'},
			{latLng: [37.45, -119.40], name: 'Yosemite Nat. Park: 17'},
			{latLng: [41.09, -81.22], name: 'Kent, Ohio: 10'},
			{latLng: [40.0, -74.30], name: 'New Jersey: 18'},
		],
		series: {
			markers: [{
				attribute: 'r',
				scale: [3, 9],
				values: cityAreaData
			}]
		},
	});
});


// Sparkline Graphs
$(function () {
	$('#projects').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 60,
		width: 120,
		spotRadius: 6,
	});

	$("#downloads").sparkline([290,320,310,365,420,320,350,370,320], {
		type: 'bar',
		barWidth: 10,
		height: 60,
		width: 120,    
		barSpacing: 5,
		barColor: '#058DC7',
		negBarColor: '#ffffaa'
	});

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


// Flot Donut Chart
$(function () {
	var data, chartOptions;
	data = [
		{ label: "", data: Math.floor (Math.random() * 100 + 140) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 30) },
		{ label: "", data: Math.floor (Math.random() * 100 + 60) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 90) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 120) }, 
	];
	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .8, 
				stroke: {
					width: 1,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			position: 'sw'
		},
		tooltip: true,

		tooltipOpts: {
			content: '%s: %y'
		},
		grid:{
			hoverable: false,
			clickable: false,
			borderWidth: 0,
		},
		shadowSize: 0,
		colors: ['#F782AA', '#0084B4', '#3FC5AC', '#FFD06B', '#CCCCCC'],
	};
	var holder = $('#advertising');
	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}	
});