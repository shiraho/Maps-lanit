(function () {
    'use strict';

    angular
        .module('maps')
        .controller('title_controller', ['$state'], function ($state) {
            $scope.goToState = function (state) {
                $state.go(state);
                $scope.currentState = state;
            }
        });


    
})();
