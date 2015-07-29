angular.module("sportsStore").
controller("sportsStoreCtrl", function ($scope){

	$scope.data ={
		products : [
			{name: "Prod #1", description: "A thing",
				category: "Category #1", price: 100},
			{name: "Prod #2", description: "A thing",
				category: "Category #1", price: 120},
			{name: "Prod #3", description: "A thing",
				category: "Category #2", price: 210},
			{name: "Prod #4", description: "A thing",
				category: "Category #3", price: 420},
		]
	};
});