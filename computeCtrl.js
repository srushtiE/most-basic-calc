var app=angular.module('calcApp',[]);
app.controller('computeCtrl',function($scope){

	$scope.displayValue = 0;
	$scope.valueA = 0;
	$scope.valueB = 0;
	$scope.selectOperation = null;
	$scope.clearValue = true;

	$scope.digitClicked = function (digit) {
    if ($scope.clearValue) {
        $scope.displayValue = digit;
        $scope.clearValue = false;
    } else {
        $scope.displayValue = parseInt($scope.displayValue * 10) + parseInt(digit);
    }
    $scope.valueB = $scope.displayValue;
	};

	$scope.operationClicked = function (operation) {
    $scope.selectOperation = operation;
    $scope.valueA = $scope.displayValue;
    $scope.valueB = $scope.displayValue;
    $scope.clearValue = true;
	};

	$scope.compute = function () {
    if($scope.selectOperation != null) {
        $scope.displayValue = $scope.selectedOperation($scope.valueA, $scope.valueB, $scope.selectOperation);
        $scope.clearValue = true;
        $scope.valueA = $scope.displayValue;
    }
	}

	$scope.selectedOperation=function(digitA,digitB,operator){
		
		if(operator =='+'){
			$scope.displayValue=parseInt(digitA) + parseInt(digitB);
			$scope.selectOperation=null;
		}else if (operator == '-'){
			$scope.displayValue= digitA - digitB;
			$scope.selectOperation=null;
		}else if (operator == '*'){
			$scope.displayValue= digitA * digitB;
			$scope.selectOperation=null;
		}else if (operator == '/'){
			$scope.displayValue= digitA / digitB;
			$scope.selectOperation=null;
		}else if (operator == 'C'){
			$scope.displayValue = 0;
		}

		return $scope.displayValue;
	}
});


	