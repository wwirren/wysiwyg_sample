angular.module('controllers', [])


// В UsersCtrl переадем $scope потому что надо так,
// userRestApiFacrtory это наша фабрика которая формирует GET запрос к серверу 
// $state не очень ясно зачем возможно данные https://marketplace.leadpages.net/iexodus/salon2/?es=9q6a7o326snbkhuxvo421k9keh7mxobcиз app.js
.controller('MainCtrl',function($scope, documentsRestApiFacrtory, $uibModal){
    // создаем обьект users в $scope чтобы передать туда наш ответ с сервера
    $scope.documents = [];

    // Собственно передаем ответ из фабрики в scope.users
    documentsRestApiFacrtory.getDocuments().
    
    // Сервер вернул то что попросили
    success(function(data, status, headers, config){
        //        var token = headers('http-token');
        $scope.documents = data;
        console.log($scope.documents[0].header);
        //clasic filter        
        //$scope.users = $filter('oderBy')(users, {'name' : search})
    }).
    
    // сервер вернул какую-то ошибку 
    error(function(data){
        console.log("pizda");
    });
    
    $scope.openDocBlockModal = function (tdoc) {
        $scope.tdoc = tdoc;
        $scope.addNewDocBlockModal = $uibModal.open({
            templateUrl: '/templates/documentBlock.html',
            scope: $scope,
            size: 'lg',
            animation: true
        });
    };
})

