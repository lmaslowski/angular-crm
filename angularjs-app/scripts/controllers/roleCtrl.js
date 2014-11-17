app.controller('roleCtrl', ['$scope', function($scope){
	 $scope.roles = [
	    {id: 1, text: 'guest'},
    	{id: 2, text: 'user'},
    	{id: 3, text: 'customer'},
    	{id: 4, text: 'admin'}
  	];

  	$scope.user = {};

  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };

}])