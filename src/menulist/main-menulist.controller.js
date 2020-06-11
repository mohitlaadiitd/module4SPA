(function () {
'use strict';
    
angular.module('MenuList')
.controller('MainMenuListController', MainMenuListController);
    
    
MainMenuListController.$inject = ['MenuListService'];
function MainMenuListController(MenuListService) {
  var mainList = this;
  
  var promise = MenuListService.getMenuCategories();

  promise.then(function(response) {
    mainList.items = response.data;
  })  
      
};
    
})();
    