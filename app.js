var app = angular.module('AngularD3App', ['ngAnimate', 'ui.bootstrap','D3Service']);

//Main Contoller for the webpage
app.controller('D3ChartController', ['$scope', '$interval','d3Service', function($scope,$interval,d3Service){
	
	
    //salesData array to refresh the graphs.
	var salesData = [salesPersons1,salesPersons2,salesPersons3,salesPersons4,salesPersons5];
	
	//project the first version of all graphs.
	var data = salesPersons1;
	d3Service.drawD3Chart(data);

	//interval service used to call the refresh every 5 seconds.
	$interval(function(){
		var random = Math.floor(Math.random() * 4) + 1;
		data = salesData[random];
		d3Service.drawD3Chart(data);
	}, 5000);


}]);
