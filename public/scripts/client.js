var myApp=angular.module('myApp',[]);

console.log('Bilo has sourced client.js');

//controller to hook index.html
myApp.controller('heroController', ['$scope', '$http', function($scope, $http){
  $scope.allTheHeroes = [];

//begin GET method to display heroes on the DOM
  $scope.retrieveHero = function(){
    $http({
      method: 'GET',
      url: '/retrieveHero'
    }).then(function(response){
      $scope.allTheHeroes = response.data;
      console.log('Bilo is ready for a hero: ' + response);
    });
};//end retrieveHero
$scope.retrieveHero();

  $scope.addHero = function(){
    var newHeroOut = {
      alias : $scope.aliasIn,
      first_name : $scope.firstNameIn,
      last_name : $scope.lastNameIn,
      city : $scope.cityIn,
      power_name : $scope.powerNameIn
    };//end newHero object
    console.log('Bilo is sending ' + newHeroOut);
    $http({
      method: 'POST',
      url: '/postHero',
      data: newHeroOut
    });
    $scope.aliasIn = '';
    $scope.firstNameIn = '';
    $scope.lastNameIn = '';
    $scope.cityIn = '';
    $scope.powerNameIn = '';
  };//end addHero

  $scope.deleteHero = function(heroID){
    var idOut = {
      id: heroID
    };
    $http({
      method: 'DELETE',
      url: '/deleteHero',
      data: idOut,
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    });
  };//end deleteHero
}]);// end controller createHero
