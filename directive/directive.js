(function () {
    'use strict';
    angular.module('angularDirective', [])
        .directive('myDirective', function () {
            return {
                template: "<h1>Welcome to Ha Noi</h1>"
            };
        });
}());