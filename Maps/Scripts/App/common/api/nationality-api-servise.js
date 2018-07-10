(function () {
    'use strict'
    var app = angular.module('Maps');
    app.service('NationalitiesApiService', ['$http', '$location',

        function ($http, $location) {
            var urlController = 'http://' + $location.host() + ':' + $location.port() + '/api/';

            this.getNationalities = function () {
                var urlRequest = urlController + 'Nationalities'
                return $http.get(urlRequest);
            };


        }]);
})();