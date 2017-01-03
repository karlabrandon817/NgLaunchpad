var myApp = angular.module( 'myApp', []);
var myMovies = [];
myApp.controller('LaunchpadControler', ['$scope', function($scope){
  console.log('NG');
  $scope.getMovieName = function(){
    console.log('in getMovieName()');
    console.log('movieName:', $scope.movieName);
    myMovies.push($scope.movieName);
    console.log('movie array:', myMovies);
    $scope.myMovies = myMovies;
  };//end getMovieName
}]);
