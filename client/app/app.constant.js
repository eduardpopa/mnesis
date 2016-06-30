(function (angular, undefined) {
    'use strict';

    angular.module('mnesisApp.constants', [])

        .constant('appConfig', {userRoles: ['guest', 'user', 'admin']})

    ;
})(angular);