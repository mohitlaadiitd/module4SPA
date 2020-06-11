(function () {
'use strict';
        
angular.module('MenuList')
.controller('MainSubListController', MainSubListController);
        
        
MainSubListController.$inject = ['items'];
function MainSubListController(items) {
    var subList = this;
    
    subList.subItems = items.menu_items;
      
};
        
})();
        