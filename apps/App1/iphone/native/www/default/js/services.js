
/* JavaScript content from js/services.js in folder common */
angular.module('blank.services', [])

.factory('BranchService', function($q) {
	
	function getBranch(){
		var data = {
				adapter:"branchAdapter",
				procedure:"procedure1"
		};
		
		var deferred = $q.defer();
		
		WL.Client.invokeProcedure(data).then(function(res) {
			deferred.resolve(res.invocationResult.resultSet);
		}, function(bad) {
			console.log("bad");
			console.dir(bad);
			deferred.reject("something here");
		});
		
		return deferred.promise;
	}
	
	return{
		
		getBranch:getBranch
	};
});