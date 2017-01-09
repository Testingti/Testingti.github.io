'use strict';

(function(){

    angular.module('busboy', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
        var baseState = {
            name: 'base',
            controller: 'baseController',
            controllerAs: 'baseCtrl',
            templateUrl: 'app/base/base.html'
        }

        var homeState = {
            name: 'base.home',
            url: '/home',
            controller: 'homeController',
            controllerAs: 'homeCtrl',
            templateUrl: 'app/home/home.html'
        }

        var wifiState = {
            name: 'base.wifi',
            url: '/wifi',
            templateUrl: 'app/wifi/wifi.html'
        }

        var menuState = {
            name: 'base.menu',
            url: '/menu',
            templateUrl: 'app/menu/menu.html'
        }

        var aboutState = {
            name: 'base.about',
            url: '/about',
            templateUrl: 'app/about/about.html'
        }

        var formSubmitState = {
            name: 'base.submit',
            url: '/submit',
            controller: 'submitController',
            controllerAs: 'submitCtrl',
            templateUrl: 'app/submit/submit.html'
        }

        $stateProvider.state(baseState);
        $stateProvider.state(homeState);
        $stateProvider.state(wifiState);
        $stateProvider.state(menuState);
        $stateProvider.state(aboutState);
        $stateProvider.state(formSubmitState);

        $urlRouterProvider.otherwise('/home');
    });
}());