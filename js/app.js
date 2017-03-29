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
  $scope.showModuleForm = true
  $scope.showSignUpForm = true

  $scope.addModule = function() {
    $scope.modules.push({"name": $scope.modulename.toUpperCase(), "website": $scope.modulewebsite})
    $scope.modulename = ""
    $scope.modulewebsite = ""
    $scope.manageGroups()
  }
  $scope.manageGroups = function() {
    /* Code modified from function suffixDuplicates obtained from http://stackoverflow.com/questions/10643933/renaming-duplicates-in-javascript-array */
    let count = { }
    let firstOccurences = { }
    let item, itemCount
    for (let i = 0; i < $scope.modules.length; i++) {
      if ($scope.modules[i].name.indexOf(' ') >= 0) {
        $scope.modules[i].name=$scope.modules[i].name.substr(0, $scope.modules[i].name.indexOf(" "))
      }
      item = $scope.modules[i].name
      itemCount = count[ item ]
      itemCount = count[ item ] = ( itemCount == null ? 1 : itemCount + 1 )
      if (itemCount == 2) {
        $scope.modules[ firstOccurences[item]].name = $scope.modules[firstOccurences[item]].name + " - Group 1"
      }
      if (count[item] > 1) {
        $scope.modules[i].name = $scope.modules[i].name + " - Group " + count[item]
      }
      else {
        firstOccurences[item] = i
      }
    }
  }
  $scope.addMember = function() {
    for (module of $scope.modules) {
      if (module.name === $scope.selectedmodule.name) {
        if (!module.members) {
          module.members=[]
        }
        module.members.push({"firstname": $scope.firstname, "lastname": $scope.lastname, "emailaddress": $scope.emailaddress})
        $scope.firstname = ""
        $scope.lastname = ""
        $scope.emailaddress = ""
        $scope.selectedmodule = ""
      }
    }
  }
  $scope.removeModule = function(module) {
    let index = $scope.modules.indexOf(module)
    $scope.modules.splice(index, 1)
    $scope.manageGroups()
  }
  $scope.removeMember = function(module,member) {
    for (mod of $scope.modules) {
      if (mod===module) {
        let index = mod.members.indexOf(member)
        mod.members.splice(index, 1)
      }
    }
  }
})
