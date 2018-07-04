(function () {
    'use strict';

    angular.module('Maps')
        .controller('tablesCtrl', ['$state', '$scope', 'AreaApiService',  function ($state, $scope, areaApiService) {
            console.log('table');

            //$scope.hello = 'tables';
            //$scope.areas = [];
            //console.log($scope.hello);
            //$scope.asd = [1, 2, 3];
            //$scope.getAreas = function () {
            //    if ($scope.areas.length == 0) {
            //        getAreasApi()
            //    }
            //};
            
            //function getAreasApi() {
            //    areaApiService.getAreas()
            //        .then(function (response) {
                        
            //        })
            //}
            //getAreasApi();

        }]);
})();