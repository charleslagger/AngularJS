(function (angular) {
    'use strict';

    function printDirective() {
        function link(scope, element, attrs) {
            element.on('click', function () {
                var elemToPrint = document.getElementById(attrs.printElementId).innerHTML;
                var oldPage = document.body.innerHTML;
                console.log("==>>" + oldPage);
                //Reset the page's HTML with div's HTML only
                document.body.innerHTML =
                    "<html><head><title></title></head><body>" +
                    elemToPrint + "</body>";
                //Print Page
                window.print();
                //Restore orignal HTML
                document.body.innerHTML = oldPage;
            });
        }

        return {
            link: link,
            restrict: 'A'
        };
    }

    angular.module('app').directive('ngPrint', [printDirective]);
}(window.angular));