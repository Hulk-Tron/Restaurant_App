/**
 * Created by HulkTron on 4/5/2016.
 */
angular.module("Rest")
  .controller("homeCtrl",function($scope){


  })
  .controller("loginCtrl",function($scope,$http,$state){
  $scope.user = {};
    $scope.login = function(){
      var ref = new Firebase("https://blood-bank1.firebaseio.com/");
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $state.go('menu')
        }
      });

    }
  })
  .controller("signupCtrl", function($scope,$http,$firebaseObject) {
    var refImg = new Firebase("https://blood-bank1.firebaseio.com//images/");
    var ImgObj = $firebaseObject(refImg);


    function saveimage(e1) {
      var filename = e1.target.files[0];
      var fr = new FileReader();
      fr.onload = function (res) {
        $scope.image = res.target.result;
        ImgObj.image = res.target.result;
        ImgObj.$save().then(function (val) {
        }, function (error) {
          console.log("ERROR", error);
        })
      };
      fr.readAsDataURL(filename);
    }

    document.getElementById("file-upload").addEventListener('change', saveimage, false);

    this.loadimage = function () {
      ImgObj.$loaded().then(function (obj) {
        $scope.profileImage = obj.image;
        console.log("loaded", $scope.profileImage);
        document.getElementById("profileImage").src = obj.image;
      }, function (error) {
        console.log("ERROR", error);
      });
    };
    this.loadimage();


    }
  )
  .controller("nameCtrl", function($scope,$http) {

    $scope.signup = function(rest) {
      $scope.rest = {}
      console.log(rest);
      var ref = new Firebase("https://blood-bank1.firebaseio.com/");
      ref.push(rest)

    }
  })
  .controller("detailCtrl", function($scope,$http) {

    $scope.detail = function(rest) {
      $scope.rest = {}
      console.log(rest);
      var ref = new Firebase("https://blood-bank1.firebaseio.com/");
      ref.push(rest)

    }
  })
.controller("menuCtrl", function($scope,$http,$state) {
    $scope.ref = new Firebase("https://blood-bank1.firebaseio.com/rest");
     $scope.ref.on("value", function(snapshot) {
       $scope.valu = snapshot.val()
       console.log($scope.valu)
   }, function (errorObject) {
       console.log("The read failed: " + errorObject.code);
  });
  $scope.logoff = function(){
    $scope.ref.unauth()
    $state.go('home')
  }
  $scope.menu = function(){
    $state.go("order")
  }
  })
  .controller("orderCtrl", function($scope,$http,$state) {
    $scope.ref = new Firebase("https://blood-bank1.firebaseio.com")
     $scope.detail = {}
    $scope.order = function(detail){
      console.log(detail)
      $scope.ref.child("order").push(detail)
      alert("Order has been register")
    }
  })

