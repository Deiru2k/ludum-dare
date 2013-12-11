'use strict';

angular.module('ludumdareApp')
  .controller('MainCtrl', function ($scope, $routeParams) {
        $scope.streamer = $routeParams.streamer;
      });