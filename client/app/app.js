'use strict';

angular.module('mnesisApp', ['mnesisApp.auth', 'mnesisApp.admin', 'mnesisApp.constants',
        'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match'
    ])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });
