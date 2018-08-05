(function(){
    'use strict';
    function MainCtrl(dataFactory) {
        var items = dataFactory.generateArrayOfObjects(50, 10);
        
        this.data = items;
      }
      
      MainCtrl.$inject = ['dataFactory'];
      
      angular
        .module('app', ['ngHandsontable'])
        .controller('MainCtrl', MainCtrl);
}());
