/**
 * Created by 1 on 2017/10/18.
 */
app.controller("shopController",["$scope","shopServer",function($scope,shopServer){
    shopServer.getname().then(function(result){
        $scope.tabs=result.data;
    });
    $scope.$on("deleteItem", function (event, index) {
        $scope.tabs.splice(index, 1);
    });
    $scope.flag = false;
    $scope.$on("itemChange", function (event, index) {
        var count = 0;
        $scope.tabs[index].state = !$scope.tabs[index].state;

        for (var i = 0; i < $scope.tabs.length; i++) {
            if ($scope.tabs[i].state) {
                count++

            }
        }
        if (count == $scope.tabs.length) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
    });

}]);