(function () {
    'use strict';

    angular.module('Maps')
        .controller('mainCtrl', ['$rootScope', '$stateParams', '$state', '$window', '$scope', function ($rootScope, $stateParams, $state, $window, $scope) {
            console.log('asdasdasd');
            $scope.hello = "asdasd";
            console.log($scope.hello);
            $scope.currentState = $state.current.name;
            $scope.goToState = function (state) {
                $scope.currentState = state;
                $state.go(state);
                $scope.currentState = state;
            }
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);
})();

//angular.module("Maps")
//    .controller("mainCtrl", ['$scope', function ($scope) {
//        console.log('main')
//        $scope.pageTitle = 'main';
//        $scope.message = 'This is the message from controller to view on page';
//    }]);
