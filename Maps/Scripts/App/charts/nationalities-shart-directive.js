(function () {
    'use strict';

    var app = angular.module('Maps');


    app.directive('nationalitiesChartDirective', ['NationalitiesApiService', function (NationalitiesApiService) {
        return {
            restrict: 'AE',
            templateUrl: "partial/charts/nationalities-chart-directive.html",


            link: function ($scope) {
                //scope.getAreas();
                console.log("nationalities-directive-link");
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
                NationalitiesApiService.getNationalities()
                    .then(function (response) {
                        var nationalities = new Array();
                        for (var i = 0; i < response.data.length; ++i) {
                            var nationality = new Object();
                            nationality.color = $scope.colorsArray[i]
                            nationality.id = response.data[i].Id;
                            nationality.title = response.data[i].Title;
                            nationality.percent = response.data[i].Peoples;
                            nationalities.push(nationality);
                        };

                        $scope.nationalities = nationalities.reverse();
                        console.log($scope.nationalities)


                        $scope.nationalitiesDirectiveInHtml = '<div class="nationalities-chart-directive-container">';
                        var container = $('.nationalities-chart-directive-container');

                        var addElement = function (data, startHeight) {


                            var element = $('<div>', {
                                'class': 'nationalities-chart-directive-element'
                            }).css({
                                'background': data.color,
                                'top': startHeight + '%',
                                'height': data.percent + '%'
                            });
                            container.append(element);
                                $scope.nationalitiesDirectiveInHtml = $scope.nationalitiesDirectiveInHtml.concat(element[0].outerHTML);
                                if (data.id == 1) {
                                    //массив элементов в реверсе, => элемент с индексом 1 - последний
                                    $scope.nationalitiesDirectiveInHtml = $scope.nationalitiesDirectiveInHtml.concat('</div>');
                                }
                            return startHeight + data.percent;
                        };
                        //prev - высота curr - элемент

                        $scope.nationalities.reduce(function (prev, curr) {
                            return (function addPart(data, height) {

                                    return addElement(data, height);
                                
                            })(curr, prev)}, 0);
                    })
            }],
        }
    }]);


})();
