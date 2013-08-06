// Define Angular Module
angular.module('chat', ['firebase'])

// Router
	
.controller('Core', ['$scope', 'angularFireCollection', function MyCtrl($scope, angularFireCollection) {
	
	var fbUser;

	// Creates an instance of Firebase and connects to our URL
	var myConn 	= new Firebase('https://fullsail.firebaseio.com/chat');

	$scope.logIn = function(){
		auth.login('facebook');
	};
	
	$scope.logOut = function(){
		auth.logout();
	};

	// instance of firebase connection to login with 
	var auth 	= new FirebaseSimpleLogin(myConn, function(error, user) {
		if(user){
	  	  $scope.fbUser = user;
		  
		}else{
			$scope.fbUser = null;
		}
		console.log(user);
	});
	
	var url = 'https://fullsail.firebaseio.com/chat';
	
	$scope.messages = angularFireCollection(url, $scope, 'msgs', []);
	
	$scope.addMsg = function(){ 
		$scope.messages.push({name: "force", text: $scope.MsgInput}); 
		
		
	};
}]);