(function () {
    'use strict';

    angular
        .module('app')
        .factory('nationality_api_servise', nationality_api_servise);

    nationality_api_servise.$inject = ['$http'];

    function nationality_api_servise($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();