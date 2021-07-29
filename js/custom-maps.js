var $red = "#E24B46";
var $pink = "#F782AA";
var $brown = "#ab7967";
var $blue = "#0084B4";
var $green = "#3FC5AC";
var $yellow = "#FFD06B";

//Google Visualization 
google.load("visualization", "1", {
	packages: ["corechart"]
});

$(document).ready(function () {
	namedLocations();
	customizingMarkers();
	stylingMap();
	stylingMapTwo();
})


google.load('visualization', '1', { 'packages': ['map'] });
  google.setOnLoadCallback(namedLocations);
  function namedLocations() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Population'],
      ['China', 'China: 1,363,800,000'],
      ['India', 'India: 1,242,620,000'],
      ['US', 'US: 317,842,000'],
      ['Indonesia', 'Indonesia: 247,424,598'],
      ['Brazil', 'Brazil: 201,032,714'],
      ['Pakistan', 'Pakistan: 186,134,000'],
      ['Nigeria', 'Nigeria: 173,615,000'],
      ['Bangladesh', 'Bangladesh: 152,518,015'],
      ['Russia', 'Russia: 146,019,512'],
      ['Japan', 'Japan: 127,120,000']
    ]);

  	var options = { 
	  	showTip: true,
	  	zoomLevel: 1,
	  	maps: {
		    styledMap: {
		      name: 'Styled Map',
		      styles: [
		        {featureType: 'poi.attraction',
		         stylers: [{color: '#fce8b2'}]},
		        {featureType: 'road.highway',
		         stylers: [{hue: '#0277bd'}, {saturation: -50}]},
		        {featureType: 'road.highway', elementType: 'labels.icon',
		         stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]},
		        {featureType: 'landscape',
		         stylers: [{hue: '#259b24'}, {saturation: 10},{lightness: -22}]}
			    ]},
			  }
  	};

  	var map = new google.visualization.Map(document.getElementById('named_locations'));
  map.draw(data, options);
};

// Customizing Markers
google.load('visualization', '1.1', {packages: ['map']});
google.setOnLoadCallback(customizingMarkers);

function customizingMarkers () {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Address');
  data.addColumn('string', 'Location');
  data.addColumn('string', 'Marker')

  data.addRows([
    ['New York City NY, United States', 'New York',   'blue' ],
    ['Scranton PA, United States',      'Scranton',   'green'],
    ['Washington DC, United States',    'Washington', 'pink' ],
    ['Philadelphia PA, United States',  'Philly',     'green'],
    ['Pittsburgh PA, United States',    'Pittsburgh', 'green'],
    ['Buffalo NY, United States',       'Buffalo',    'blue' ],
    ['Baltimore MD, United States',     'Baltimore',  'pink' ],
    ['Albany NY, United States',        'Albany',     'blue' ],
    ['Allentown PA, United States',     'Allentown',  'green']
  ]);
  var url = 'img/';

  var options = {
    zoomLevel: 6,
    showTip: true,
    useMapTypeControl: true,
    icons: {
      blue: {
        normal:   url + 'map2.png',
        selected: url + 'map1.png'
      },
      green: {
        normal:   url + 'user4.png',
        selected: url + 'map1.png'
      },
      pink: {
        normal:   url + 'user5.png',
        selected: url + 'map1.png'
      }
    }
  };
  var map = new google.visualization.Map(document.getElementById('customized_markers'));

  map.draw(data, options);
}


//Styling Map
google.load('visualization', '1.1', {packages: ['map']});
google.setOnLoadCallback(stylingMap);

function stylingMap () {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Address');
  data.addColumn('string', 'Location');

  data.addRows([
    ['Lake Buena Vista, FL 32830, United States',                  'Walt Disney World'],
    ['6000 Universal Boulevard, Orlando, FL 32819, United States', 'Universal Studios'],
    ['7007 Sea World Drive, Orlando, FL 32821, United States',     'Seaworld Orlando' ]
  ]);

  var options = {
    mapType: 'styledMap',
    zoomLevel: 12,
    showTip: true,
    useMapTypeControl: true,
    maps: {
      // Your custom mapTypeId holding custom map styles.
      styledMap: {
        name: 'Styled Map', // This name will be displayed in the map type control.
        styles: [
          {featureType: 'poi.attraction',
           stylers: [{color: '#fce8b2'}]
          },
          {featureType: 'road.highway',
           stylers: [{hue: '#0277bd'}, {saturation: -50}]
          },
          {featureType: 'road.highway',
           elementType: 'labels.icon',
           stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
          },
          {featureType: 'landscape',
           stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
          }
    ]}}
  };

  var map = new google.visualization.Map(document.getElementById('styling_map'));

  map.draw(data, options);
}



// Style Map 2
google.setOnLoadCallback(stylingMapTwo);

function stylingMapTwo () {
var data = new google.visualization.DataTable();
data.addColumn('string', 'Address');
data.addColumn('string', 'Location');

data.addRows([
  ['Yellowstone National Park, Wyoming, United States', 'YellowStone']
]);
var options = {
  mapType: 'styledMap',
  zoomLevel: 7,
  showTip: true,
  useMapTypeControl: true,
  // User will only be able to view/select custom styled maps.
  mapTypeIds: ['styledMap', 'redEverything', 'imBlue'],
  maps: {
    styledMap: {
      name: 'Styled Map',
      styles: [
        {featureType: 'poi.attraction',
         stylers: [{color: '#fce8b2'}]},
        {featureType: 'road.highway',
         stylers: [{hue: '#0277bd'}, {saturation: -50}]},
        {featureType: 'road.highway', elementType: 'labels.icon',
         stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]},
        {featureType: 'landscape',
         stylers: [{hue: '#259b24'}, {saturation: 10},{lightness: -22}]}
    ]},
    redEverything: {
      name: 'Redden All The Things',
      styles: [
        {featureType: 'landscape',
         stylers: [{color: '#fde0dd'}]},
        {featureType: 'road.highway',
         stylers: [{color: '#67000d'}]},
        {featureType: 'road.highway', elementType: 'labels',
         stylers: [{visibility: 'off'}]},
        {featureType: 'poi',
         stylers: [{hue: '#ff0000'}, {saturation: 50}, {lightness: 0}]},
        {featureType: 'water',
         stylers: [{color: '#67000d'}]},
        {featureType: 'transit.station.airport',
         stylers: [{color: '#ff0000'}, {saturation: 50}, {lightness: -50}]}
    ]},
    imBlue: {
      name: 'All Your Blues are Belong to Us',
      styles: [
        {featureType: 'landscape',
         stylers: [{color: '#c5cae9'}]},
        {featureType: 'road.highway',
         stylers: [{color: '#023858'}]},
        {featureType: 'road.highway', elementType: 'labels',
         stylers: [{visibility: 'off'}]},
        {featureType: 'poi',
         stylers: [{hue: '#0000ff'}, {saturation: 50}, {lightness: 0}]},
        {featureType: 'water',
         stylers: [{color: '#0288d1'}]},
        {featureType: 'transit.station.airport',
         stylers: [{color: '#0000ff'}, {saturation: 50}, {lightness: -50}]}
    ]}
  }
};
var map = new google.visualization.Map(document.getElementById('styling_map_two'));

map.draw(data, options);
}
