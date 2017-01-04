var myApp = angular.module( 'myApp', []);

myApp.controller('LaunchpadController', ['$scope', function($scope){
  $scope.myMovies = [];
  $scope.getMovieName = function(){
    console.log('in getMovieName()');
    console.log('movieName:', $scope.movieName);
    $scope.myMovies.push($scope.movieName);
    console.log('movie array:', $scope.myMovies);
  };//end getMovieName
}]);
