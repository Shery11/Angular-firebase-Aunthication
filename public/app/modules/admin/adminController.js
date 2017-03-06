app.controller('adminCtrl', function ($scope,$firebaseObject,$rootScope,$firebaseAuth,$state) {
     var db = firebase.database().ref();
     var user = db.child('users');
     var search = user.orderByChild('email').equalTo($rootScope.val).limitToFirst(1);

     $scope.data = $firebaseObject(search);

    $scope.auth = $firebaseAuth();
   $scope.authRun = function(){

	auth.signInWithEmailAndPassword($scope.email , $scope.password).then(function(firebaseUser){
		console.log("Signed in as:", firebaseUser.uid);
		}).catch(function(error) {
		console.error("Authentication failed:", error);
});
}


  $scope.signOut = function() {
            
            firebase.auth().signOut().then(function() {
                  $state.go('homeControl');
                  
           
             }, function(error) {

                console.log("Error logging out");
            });
  }


  $scope.drop = function(){
    $(".dropdown-button").dropdown();
  }

});