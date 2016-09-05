/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('factory', []).
// Фабрика для наших запросов к API сервера
factory('documentsRestApiFacrtory', function($http, generalItem){
    return {
        getDocuments: function() {
            return $http({
                metod: "GET",
                // url генерится в нашем сервисе и становится сюда
                url: generalItem.options.urlDocuments,
                headers: {
                    'Content-Type': 'aplication.json; charset=utf-8'
                }
                
            });
        }
    };
});


