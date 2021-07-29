var $border_color = "#eee";
var $grid_color = "#eee";
var $default_black = "#666";
	
$(function () {

	var data, chartOptions;
	
	data = [
		{ label: "Apples", data: Math.floor (Math.random() * 100 + 150) }, 
		{ label: "Oranges", data: Math.floor (Math.random() * 100 + 390) }, 
		{ label: "Pinaples", data: Math.floor (Math.random() * 100 + 530) }, 
		{ label: "Grapes", data: Math.floor (Math.random() * 100 + 90) },
		{ label: "Bananas", data: Math.floor (Math.random() * 100 + 320) }
	];

	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .5, 
				stroke: {
					width: 0,
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
      hoverable: true,
      clickable: false,
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
    shadowSize: 0,
		colors: ['#3FC5AC', '#0084B4', '#d8e3ef', '#e8eff7', '#F0F5FC'],
	};

	var holder = $('#donut-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}		
		
});