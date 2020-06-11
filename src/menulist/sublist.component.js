(function () {

'use strict';

angular.module('MenuList')
.component('subListComponent', {
    templateUrl: 'src/menulist/templates/sublist.template.html',
    bindings: {
        subList: '<'
    }
});

})();