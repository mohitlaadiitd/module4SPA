(function () {
'use strict';

angular.module('MenuList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuList/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuList/templates/main-menulist.template.html',
    controller: 'MainMenuListController as mainList'
  })

  //Sub-Category
  .state('sub-category', {
    url: '/sub-category/{short_name}',
    templateUrl: 'src/menuList/templates/menusublist.template.html',
    controller: 'MainSubListController as subList',
    resolve: {
      items: ['$stateParams', 'MenuListService',
        function($stateParams, MenuListService) {
          return MenuListService.getCategory($stateParams.short_name)
          .then(function(response) {
            return response.data;
          });
        }]
    }

  })
}

})();
