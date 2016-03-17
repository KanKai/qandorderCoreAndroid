var controllerModule = angular.module('blank.controllers', [])
 
//controllerModule.controller("branchCtrl", ['$scope', '$http', '$state', function($scope, $http, $state) {
//	
//	$http.get('js/data.json').success(
//		function(data) {
//			$scope.artists = data;
//			$scope.whichartist = $state.params.aId;
//			
//			$scope.doRefresh = function() {
//				$http.get('js/data.json').success(function(data) {
//					$scope.artists = data;
//					$scope.$broadcast('scroll.refreshComplets');
//				});
//			};
//			
//		});
//}]);

controllerModule.controller("branchCtrl", function($scope, BranchService) {
	
	console.log('branchCtrl loaded');
	
	BranchService.getBranch().then(function(results) {
		console.log(results);
		$scope.content = results;
	});
});

