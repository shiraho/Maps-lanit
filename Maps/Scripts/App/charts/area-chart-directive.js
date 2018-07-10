(function () {
    'use strict';

    var app = angular.module('Maps');


    app.directive('areaChartDirective', ['AreaApiService', function (AreaApiService) {
        return {
            restrict: 'AE',
            templateUrl: "partial/charts/area-chart-directive.html",


            link: function ($scope) {
                //scope.getAreas();
                console.log("area-directive-link");
                //$scope.getAreas = AreaApiService.getAreas();    
                //AreaApiService.getAreas()
                //    .then(function (response) {
                //        var x = response;
                //        console.log(x);
                //    })
            },
            controller: ['$scope', function ($scope) {
                //$scope.getAreas = AreaApiService.getAreas();
                $scope.colorsArray = [
                    '#673AB7',
                    '#607D8B',
                    '#FF5722',
                    '#4CAF50',
                    '#FFEB3B',
                    '#00BCD4',
                    '#795548',
                    '#CDDC39',
                    '#009688',
                    '#FF9800',
                    '#03A9F4',
                    '#E91E63',
                    '#8BC34A',
                    '#F44336'];
                AreaApiService.getAreas()
                    .then(function (response) {
                        var areas = new Array();
                        var sumArea = 0;
                        for (var i = 0; i < response.data.length; ++i) {
                            var area = new Object();
                            area.color = $scope.colorsArray[i]
                            area.id = response.data[i].Id;
                            area.title = response.data[i].Title;
                            area.population = response.data[i].Population;
                            area.surface = response.data[i].SurfaceArea;
                            areas.push(area);
                            sumArea += response.data[i].SurfaceArea;
                        };
                        for (var k = 0; k < areas.length; ++k) {
                            areas[k].percent = areas[k].surface / (sumArea / 100);
                        }
                        $scope.areas = areas;
                        console.log($scope.areas)
                        $scope.areaDirectiveInHtml = '<div class="area-chart-directive-container">';

                    

                var maxValue = 25;
                var container = $('.area-chart-directive-container');

                var addSector = function (data, startAngle, collapse) {
                    var sectorDeg = 3.6 * data.percent;
                    var skewDeg = 90 + sectorDeg;
                    var rotateDeg = startAngle;
                    if (collapse) {
                        skewDeg++;
                    }

                    var sector = $('<div>', {
                        'class': 'area-chart-directive-sector'
                    }).css({
                        'background': data.color,
                        'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
                    });
                    container.append(sector);
                    $scope.areaDirectiveInHtml = $scope.areaDirectiveInHtml.concat(sector[0].outerHTML);
                    if (data.id == ($scope.areas.length -1)) {
                        $scope.areaDirectiveInHtml = $scope.areaDirectiveInHtml.concat('</div>');
                    }

                    return startAngle + sectorDeg;
                };

                $scope.areas.reduce(function (prev, curr) {
                    return (function addPart(data, angle) {
                        if (data.percent <= maxValue) {
                            return addSector(data, angle, false);
                        }

                        return addPart({
                            percent: data.percent - maxValue,
                            color: data.color
                        }, addSector({
                                percent: maxValue,
                            color: data.color,
                        }, angle, true));
                    })(curr, prev);
                        }, 0);
                    })
            }],
        }
    }]);

    
})();
