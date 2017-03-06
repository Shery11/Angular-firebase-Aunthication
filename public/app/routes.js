


app.config(['$locationProvider','$routeProvider','$stateProvider', function ($locationProvider,$routeProvider,$stateProvider) {


 
   $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    templateUrl: 'app/modules/home/home.html',
    controller: 'homeCtrl'
  }).when('/signin', {
    templateUrl: 'app/modules/form/signin.html',
    controller: 'homeCtrl'
  }).when('/signup', {
    templateUrl: 'app/modules/form/signup.html',
    controller: 'homeCtrl'
  })
  .otherwise({ redirectTo: '/' });



// State Setup - ui Router
$stateProvider.state('adminControl', {
  templateUrl: 'app/modules/admin/admin.html',
  controller:'adminCtrl'
})

$stateProvider.state('homeControl', {
  templateUrl: 'app/modules/home/home.html',
  controller:'homeCtrl'
})
  
}]);