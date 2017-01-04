var myApp = angular.module( 'myApp', []);

myApp.controller('LaunchpadController', ['$scope', function($scope){
  $scope.myMovies = [];
  $scope.getMovieName = function(){
    var favMovies = {
      movie: $scope.movieName,
      year: $scope.movieYear
    };
    console.log('movieName:', $scope.movieName + ' ' + $scope.movieYear);
    $scope.myMovies.push(favMovies);
    console.log('movie array:', $scope.myMovies);
  };//end getMovieName
}]);
