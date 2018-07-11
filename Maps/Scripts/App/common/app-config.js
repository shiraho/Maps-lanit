angular.module('Maps', ['ui.router', 'ngMaterial'])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

        // default route

        $urlRouterProvider.otherwise('/tables');
        console.log('config')
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'partial/common/title.html',
                controller: 'mainCtrl as ctrl'
            })
            .state('main.maps', {
                url: 'maps',
                templateUrl: 'partial/maps/maps.html',
                controller: 'mapsCtrl as ctrl'
            })
            .state('main.tables', {
                url: 'tables',
                templateUrl: 'partial/tables/tables.html',
                controller: 'tablesCtrl'
            })
    }]);



////(function () {
////    'use strict';

//angular.module('Maps', ["ui.router"])
//    .config(['$stateProvider', '$urlRouterProvider',
//            function ($stateProvider, $urlRouterProvider) {
//                console.log('asd');
//                $urlRouterProvider.otherwise('/');

//                //var defaultPageRedirect = function ($injector) {
//                //    var $state = $injector.get("$state");
//                //    $state.go("main.tables");
//                //}

                //$stateProvider
                //    .state('main', {
                //        url: '/',
                //        views: {
                //            'main': {
                //                templateUrl: 'partial/common/main.html',
                //                controller: 'mainCtrl'
                //            },
                            //'title@main': {
                            //    templateUrl: 'partial/common/title.html',
                            //    controller: 'titleCtrl'
                            //},
                            //'content@main': {
                            //    templateUrl: 'partial/common/content.html'
                            //}
                    //    },

                    //})

//                    .state('main.maps', {
//                        url: "/maps",
//                        templateUrl: "partial/maps/maps.html",
//                        controller: 'maps_controller'
//                    })

//                    .state('main.tables', {
//                        url: '/tables',
//                        templateUrl: 'partial/tables/tables.html',
//                        controller: 'tables_controller'
//                    })
//                //$route
//            }


//        ]);
////})();