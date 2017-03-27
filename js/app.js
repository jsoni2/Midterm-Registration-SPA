const myApp = angular.module('myApp', ['ngRoute']).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('');
  }
]).config([
  '$routeProvider',
  function($routeProvider) {

    $routeProvider.when('/', {templateUrl: 'views/home.html'}).when('/signup', {templateUrl: 'views/signup.html'}).otherwise({redirectTo: '/'})
  }
])

myApp.controller("moduleController", function($scope) {
  $scope.modules = []
  $scope.showModuleForm = false
  $scope.showSignUpForm = false

  $scope.addModule = function() {
    $scope.modules.push({"name": $scope.modulename.toUpperCase(), "website": $scope.modulewebsite})
    $scope.modulename = ""
    $scope.modulewebsite = ""
  }

  $scope.addMember = function() {
    for (module of $scope.modules) {
      console.log(module);
      console.log($scope.selectedmodule);
      if (module.name === $scope.selectedmodule.name) {
        if (!module.members) {
          console.log('or here?');
          module.members=[]
          module.members.push({"firstname": $scope.firstname, "lastname": $scope.lastname, "emailaddress": $scope.emailaddress})
        }
        else {
          console.log('here?');
          module.members.push({"firstname": $scope.firstname, "lastname": $scope.lastname, "emailaddress": $scope.emailaddress})
        }
        console.log('going in if');
        $scope.firstname = ""
        $scope.lastname = ""
        $scope.emailaddress = ""
        $scope.selectedmodule = ""
        console.log(module.members);
      }
      else {
        console.log('not going in loop');
      }
    }
    console.log(JSON.stringify($scope.modules, null, "\t"));
  }

  $scope.removeModule = function(module) {
    let index = $scope.modules.indexOf(module)
    $scope.modules.splice(index, 1)
  }

  $scope.removeMember = function(module,member) {
    //let index = $scope.modules.indexOf(module)
    for (mod of $scope.modules) {
      if (mod===module) {
        let index = mod.members.indexOf(member)
        mod.members.splice(index, 1)
      }
    }
    console.log(JSON.stringify($scope.modules, null, "\t"));
  }
})
