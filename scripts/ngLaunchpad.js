var myApp = angular.module( 'myApp', []);

myApp.controller('LaunchpadController', ['$scope', function($scope){
  $scope.myMovies = [];
  $scope.getMovieName = function(){
    var favMovies = {
      movie: $scope.movieName,
      year: $scope.movieYear
    };
    $scope.myMovies.push(favMovies);
    $scope.movieName='';
    $scope.movieYear='';
    //console.log('movie array:', $scope.myMovies);
  };//end getMovieName
}]);
