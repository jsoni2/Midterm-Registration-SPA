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
    $scope.members = []
    $scope.showModuleForm = false
    $scope.showSignUpForm = false

    $scope.addModule = function() {
      // for (module of $scope.modules) {
      //   if(module.name === $scope.modulename.toUpperCase()){
      //     module.name
      //   }
      // }
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
        // $scope.members.push({"firstname": $scope.firstname, "lastname": $scope.lastname, "emailaddress": $scope.emailaddress, "memberOf": $scope.selectedmodule})

        // console.log($scope.members);
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


// $scope.addModule = function() {
//
//   //alert("add new called")
//   if ($scope.modules.length===0) {
//     $scope.modules.push({"name": $scope.modulename.toUpperCase() ,"website": $scope.modulewebsite})
//   }
//   else if ($scope.modules.length>0)
//     {
//     for (let module of $scope.modules) {
//       if (module.name !== $scope.modulename.toUpperCase()) {
//         $scope.modules.push({"name": $scope.modulename.toUpperCase() ,"website": $scope.modulewebsite})
//         $scope.modulename=""
//         $scope.modulewebsite=""
//         console.log('if element is never entered');
//         return
//       }
//       else if (module.name === $scope.modulename.toUpperCase() || module.name.substr(0, module.name.indexOf("")) === $scope.modulename.toUpperCase()) {
//         $scope.count=1
//         module.name = module.name + ' - Group ' + $scope.count
//         $scope.count++
//         $scope.modules.push({"name": $scope.modulename.toUpperCase() + ' - Group ' + $scope.count ,"website": $scope.modulewebsite})
//         $scope.modulename=""
//         $scope.modulewebsite=""
//         return
//       }
//       else if (module.name.substr(0, module.name.indexOf(" ")) === $scope.modulename.toUpperCase() && module.name.match(/\d+/)[0] >= $scope.count) {
//         //let thenum = module.name.match(/\d+/)[0]
//         //console.log('thenum'+thenum);
//         $scope.count++
//         $scope.modules.push({"name": $scope.modulename.toUpperCase() + ' - Group ' + $scope.count ,"website": $scope.modulewebsite})
//         $scope.modulename=""
//         $scope.modulewebsite=""
//         return
//
//         //thenum = thenum + 1
//         //$scope.modules.push({"name": $scope.modulename.toUpperCase() + ' - Group ' + thenum ,"website": $scope.modulewebsite})
//       }
//       else {
//         $scope.modules.push({"name": $scope.modulename.toUpperCase() ,"website": $scope.modulewebsite})
//         $scope.modulename=""
//         $scope.modulewebsite=""
//         console.log('last else');
//         return
//       }
//     }
//   }
//   else {
//     $scope.modules.push({"name": $scope.modulename.toUpperCase() ,"website": $scope.modulewebsite})
//     console.log('last if');
//   }
//   // $scope.modules.push({"name": $scope.modulename.toUpperCase() ,"website": $scope.modulewebsite})
//   console.log($scope.modules);
//   // for (let value of $scope.modules) {
//   //   console.log(value.name);
//   // }
//   $scope.modulename=""
//   $scope.modulewebsite=""
// }
// trying to do different approach
// $scope.addModule = function() {
//   $scope.count=0
//   for (let i = 0; i < $scope.modules.length; i++) {
//     for (let j = i + 1; j < $scope.modules.length; j++) {
//       if ($scope.modules[i].name===$scope.modules[j].name && $scope.modules[j].name===$scope.modulename.toUpperCase()) {
//         $scope.count++
//       }
//       else {
//         $scope.modules.push({"name": $scope.modulename.toUpperCase() ,"website": $scope.modulewebsite})
//       }
//     }
//     //console.log($scope.modules[i].name);
//     //$scope.modules[i]
//   }
//   $scope.modulename=""
//   $scope.modulewebsite=""
// }
