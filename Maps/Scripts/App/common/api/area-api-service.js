(function () {
    'use strict'
    var app = angular.module('Maps');
    app.service('AreaApiService', ['$http', '$location',

        function ($http, $location) {
            var urlController = 'http://' + $location.host() + ':' + $location.port() + '/api/';

            this.getAreas = function () {
                var urlRequest = urlController + 'Areas'
                return $http.get(urlRequest);
            };


        }]);
})();