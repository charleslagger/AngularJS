(function () {
    'use strict';
    angular.module('tesCtr', []).controller('repeatController', repeatController);
    repeatController.$inject = ['$location'];
    function repeatController($location) {
        var employees = [
            {firstName: 'khoe', lastName: 'nguyen'},
            {firstName: 'khoa', lastName: 'le'}            
        ];
        $location.employees = employees;
    };
}());