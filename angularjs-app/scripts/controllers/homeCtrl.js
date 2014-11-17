app.controller('homeCtrl', ['$scope', function($scope){
		$scope.home = "Hello";
		$scope.repo = {};
		$scope.addgroup = {};
		users = [
			{'id' : '1', 'name':'login1'},
			{'id' : '2', 'name':'login2'},
			{'id' : '3', 'name':'login3'}
		];
		$scope.users = users;
		$scope.repo.users = users;

		 $scope.uncheckAll = function() {
    		$scope.addgroup.user = [];
  		};
	}])

