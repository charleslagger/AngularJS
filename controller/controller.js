(function () {
    'use strict';
    angular.module('controllers', [])
        .controller('controller1', controller1)
        .controller('controller2', controller2);

    function controller1($scope, $rootScope) {
        var persons = [
            {
                firstName: 'khoe1',
                lastName: 'nguyen1'
            },
            {
                firstName: 'khoe2',
                lastName: 'nguyen2'
            },
            {
                firstName: 'khoe3',
                lastName: 'nguyen3'
            }
        ];

        $scope.listPersons = persons;
        $rootScope.huhu = 'good';
    };

    function controller2($scope, $rootScope) {
        $scope.message = 'Who are you?';
    };
}());
