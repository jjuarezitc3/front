'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$scope','$routeParams', 
      function PhoneDetailController($scope, $routeParams) {
        this.phoneId = $routeParams.phoneId;
        $scope.addPoints = function () {
      var seriesArray = $scope.chartConfig.series
      var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    var series = 0;
    $scope.addSeries = function () {
      var rnd = []
      for (var i = 0; i < 10; i++) {
        rnd.push(Math.floor(Math.random() * 20) + 1)
      }
      $scope.chartConfig.series.push({
        data: rnd,
        id: 'series_' + series++
      })
    }

    $scope.removeRandomSeries = function () {
      var seriesArray = $scope.chartConfig.series
      var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray.splice(rndIdx, 1)
    }

    $scope.swapChartType = function () {
      if (this.chartConfig.chart.type === 'line') {
        this.chartConfig.chart.type = 'bar'
      } else {
        this.chartConfig.chart.type = 'line'
        this.chartConfig.chart.zoomType = 'x'
      }
    }

    $scope.chartConfig = {
      chart: {
        type: 'bar'
      },
      series: [{
        data: [10, 15, 12, 8, 7],
        id: 'series1'
      }],
      title: {
        text: 'Hello'
      }
    }
      }
    ]
  });
