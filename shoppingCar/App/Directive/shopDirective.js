/**
 * Created by 1 on 2017/10/18.
 */
app.directive("shopcar",function(){
    return{
        templateUrl:"App/View/temp/shopCar.html",
        controller:function($scope){
            $scope.deleteItem = function (index) {
                $scope.$emit("deleteItem", index);
            };
            $scope.itemChecked = function (index) {
                $scope.$emit("itemChange", index);
            };
        }

    }
});