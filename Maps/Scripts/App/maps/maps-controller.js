
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
                center: [55.733835, 37.588227],
                zoom: 12,
                // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
                // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
                controls: []
            });

            var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContentBody: [
                    '<div area-chart-directive="" class="ng-scope"><!--<div>before</div>' +
                    ' <div ng-repeat="area in areas">{{ area.title }}12</div>' +
                    '<div>after</div>-->' +
                    '<div class="area-chart-directive-container"><div class="area-chart-directive-sector" style="background: rgb(96, 125, 139); transform: rotate(0deg) skewY(103.668deg);"></div><div class="area-chart-directive-sector" style="background: rgb(103, 58, 183); transform: rotate(13.6684deg) skewY(125.463deg);"></div><div class="area-chart-directive-sector" style="background: rgb(255, 87, 34); transform: rotate(49.1313deg) skewY(99.4139deg);"></div><div class="area-chart-directive-sector" style="background: rgb(76, 175, 80); transform: rotate(58.5453deg) skewY(93.5829deg);"></div><div class="area-chart-directive-sector" style="background: rgb(255, 235, 59); transform: rotate(62.1282deg) skewY(111.799deg);"></div><div class="area-chart-directive-sector" style="background: rgb(0, 188, 212); transform: rotate(83.9271deg) skewY(128.228deg);"></div><div class="area-chart-directive-sector" style="background: rgb(121, 85, 72); transform: rotate(122.155deg) skewY(181deg);"></div><div class="area-chart-directive-sector" style="background: rgb(121, 85, 72); transform: rotate(212.155deg) skewY(108.155deg);"></div><div class="area-chart-directive-sector" style="background: rgb(205, 220, 57); transform: rotate(230.31deg) skewY(181deg);"></div><div class="area-chart-directive-sector" style="background: rgb(205, 220, 57); transform: rotate(320.31deg) skewY(129.69deg);"></div></div>' +
                    ' </div>'
                ]
            })
        ;

            myMap.geoObjects.add(myPlacemark);

        });

        }]);
})();