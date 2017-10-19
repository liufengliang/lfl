/**
 * Created by 1 on 2017/10/18.
 */
app.factory("shopServer",function($http,$q){
    return{
        getname:function(){
            var def=$q.defer();
            $http({
                url:"./Data/data.json"
            }).then(function(result){
                def.resolve(result);
            })
            return def.promise;
        }
    }
});