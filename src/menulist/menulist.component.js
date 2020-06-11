(function () {
'use strict';
    
angular.module('MenuList')
.component('menuList', {
  templateUrl: 'src/menulist/templates/menulist.template.html',
  bindings: {
  items: '<'
}
});
    
})();