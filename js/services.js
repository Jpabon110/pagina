angular.module("FinalApp")
.factory("PostResource",["$resource",function(res){
    return res("http://localhost:3000/personajes/:id",{id: "@id"},{update: {method: "PUT"}});
}])
