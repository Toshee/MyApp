var emiApp = angular.module("emiApp", []);

emiApp.controller("EMIController", function($scope, $http){

    $scope.age = 0;
    $scope.ishidden = !true;
    $scope.isperfect = true;

    
    $scope.calculateEMI = function () {

        var name = $scope.custName;
        var birthday = $scope.dob;
        var err = "";

    	/**
     	* EMI Logic
     	*/

        var today = new Date();
        birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;            
        }
        if (age < 18 | age > 65) {
            err = "err";
        }

        if ($scope.gender == "male") {
            var gender1 = 1.2
        }
        else if ($scope.gender == "female") {
            var gender1 = 1.1;
        }


        var amt = age * gender1 * 100;

    	/**
    	*  Values to display    	
    	*/

        $scope.totalPayable = display2Decimals(amt);
        if (err == "err") {
            $scope.isperfect = false;
            $scope.ishidden = false;
        }
        else {
            $scope.ishidden = !false;
            $scope.isperfect = true;
        }
    }

    $scope.reset = function(){

        $scope.custName = "";
        $scope.dob = "";
        $scope.gender = 1;
    	$scope.totalPayable=0.0;
    	$scope.ishidden=!true; } // end function reset

}); //end controller
