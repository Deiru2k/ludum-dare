/**
 * Created by ilia on 11/12/13.
 */
'use strict';

angular.module('ludumdareApp')
  .controller('IndexCtrl', function ($scope, $routeParams) {
        alert($routeParams.streamer);
        //$scope.streamer = $route.current.params.streamer;
      });