
(function () {
    'use strict';
    var app = angular.module('Maps')

    app.controller('mapsCtrl', ['$state', '$scope', function ($state, $scope) {
            console.log('maps');
            $scope.hello = 55;
        console.log($scope.hello);
        //$scope.region = {
        //    id: 'RU',
        //    title: 'Росиия'
        //}


        
        ymaps.ready(function () {

            var myMap = new ymaps.Map('YMapsID', {
                center: [61.58, 97.37],
                zoom: 2,
                // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
                // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
                controls: []
            });

            
            ymaps.borders.load('RU').then(function (geojson) {
                console.log(geojson);
            
                for (var i = 0; i < geojson.features.length; i++) {
                    if (geojson.features[i].properties.iso3166 == 'RU-LEN') {
                        geojson.features[i].properties.balloonContent = $scope.nationalitiesDirectiveInHtml;

                    }
                    else {
                        geojson.features[i].properties.balloonContent = $scope.areaDirectiveInHtml;

                    }
                    var geoObject = new ymaps.GeoObject(geojson.features[i]);
                myMap.geoObjects.add(geoObject);
            }
                });
            

        });

        }]);
})();