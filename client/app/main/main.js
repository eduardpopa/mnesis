'use strict';

angular.module('mnesisApp')
    .config(function ($stateProvider) {
        $stateProvider.state('main', {
            url: '/',
            template: '<main></main>'
        });
    });
