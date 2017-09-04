angular.
  module('core.rest').
  factory('Rest', ['$resource',
    function($resource) {
      return $resource('http://localhost:8080/backend/api/airlines/by-incidents/asc', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  ]);