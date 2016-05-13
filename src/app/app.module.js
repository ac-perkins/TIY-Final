(function() {
    'use strict';

  angular
    .module('app',['firebase', 'ui.router'])
    .config(appConfig);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.template.html'
      // controller: 'HomeViewController',
      // controllerAs: 'home'
    })
    .state('events', {
      url: '/events/:id',
      templateUrl: 'events/events.template.html',
      controller: 'EventsController',
      controllerAs: 'events'
    })
    .state('createEvent', {
      url: '/event/create',
      templateUrl: 'events/create-event.template.html',
      controller: 'CreateEventController',
      controllerAs: 'create'
    })
    .state('streams', {
      url: '/streams/:id',
      templateUrl: 'streams/streams.template.html',
      controller: 'StreamsController',
      controllerAs: 'streams'
    });

  }

})();
