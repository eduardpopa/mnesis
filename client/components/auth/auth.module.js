'use strict';

angular.module('mnesisApp.auth', ['mnesisApp.constants', 'mnesisApp.util', 'ngCookies', 'ui.router'])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
