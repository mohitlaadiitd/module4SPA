(function () {
'use strict';
    
angular.module('MenuList')
.service('MenuListService', MenuListService);
    
MenuListService.$inject = ['$http']
function MenuListService($http) {
  var service = this;

  service.getMenuCategories = function() {
    var promise = $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    });

    return promise;
  };

  service.getCategory = function(short_name) {
    var promise = $http({
      method: 'GET',
      url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
      params: { category: short_name }
    });

    return promise;
  }

}
    
})();
    