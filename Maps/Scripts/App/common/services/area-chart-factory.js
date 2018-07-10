(function () {
    'use strict';
    angular.module('Maps').service('AreaChartService', function () {
        this.getAreasApi = function () {
            this.areas = [];
            this.colorsArray = [
                '#607D8B',
                '#673AB7',
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
            areaApiService.getAreas()
                .then(function (response) {
                    var sumArea = 0;
                    var areas = new Array();
                    for (var i = 0; i < response.data.length; ++i) {
                        var area = new Object();
                        area.color = this.colorsArray[i]
                        area.id = response.data[i].Id;
                        area.title = response.data[i].Title;
                        area.population = response.data[i].Population;
                        area.surface = response.data[i].SurfaceArea;
                        areas.push(area);
                        sumArea += response.data[i].SurfaceArea;
                    };
                    for (var i = 0; i < areas.length; ++i) {
                        area[i].percent = sumArea / area[i].SurfaceArea;
                    }
                    this.areas = areas;
                    console.log(areas)
                })
            return(this.areas)
        };
        

    });

})();