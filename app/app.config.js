'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {

      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
        delete $httpProvider.defaults.headers.common['X-Requested-With'];


      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/menu', {
          template: '<main-menu></main-menu>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/incidentes-aereos',{
          template: '<incidentes-aereos></incidentes-aereos>'
        }).
        when('/clima',{
          template: '<clima></clima>'
        }).
        otherwise('/menu');
    }
  ]);
