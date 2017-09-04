'use strict';

angular.
module('clima').
component('clima', {
    templateUrl: 'clima/clima.template.html',
    controller: ['$scope', '$routeParams', '$http', 'Rest',
        function ClimaController($scope, $routeParams, $http, Rest) {

            var renderGraficas = {};

            //
            $scope.actualMeanTemp = {};
            $scope.chartConfigFatalAccidents = {};
            $scope.chartConfigFatalities = {};

            //
            /*
            var Indata = { "since":"2014-7-2", "until": "2014-7-5" };
            $http({
                url: "http://localhost:8080/backend/api/clima/actual-mean-temp",
                method: "POST",
                params: Indata,
                headers: {
                    'Content-Type': 'application/json'
                    }
                });*/


            //
            
            $http.get('http://localhost:8080/backend/api/aerolineas/comparativa/accidentes-fatales').
            then(function successCallback(response) {
                console.log(response.data);
                renderGraficas.comparativaIncidentes(-1, -1);

            }, function errorCallback(response) {
                throw new Error("Error");
            }).then(function(response) {
                //
            });


            $http.get('http://localhost:8080/backend/api/aerolineas/comparativa/accidentes-fatales').
            then(function successCallback(response) {
                console.log(response.data);
                var cantidadPeriodo1 = response.data["periodo1"];
                var cantidadPeriodo2 = response.data["periodo2"];
                renderGraficas.comparativaAccidentesFatales(cantidadPeriodo1, cantidadPeriodo2);

            }, function errorCallback(response) {
                throw new Error("Error");
            }).then(function(response) {
                //
            });

            $http.get('http://localhost:8080/backend/api/aerolineas/comparativa/fatalidades').
            then(function successCallback(response) {
                console.log(response.data);
                var cantidadPeriodo1 = response.data["periodo1"];
                var cantidadPeriodo2 = response.data["periodo2"];
                renderGraficas.comparativaFatalidades(cantidadPeriodo1, cantidadPeriodo2);

            }, function errorCallback(response) {
                throw new Error("Error");
            }).then(function(response) {
                //
            });


            renderGraficas.comparativaIncidentes = function(periodo1, periodo2) {
                $scope.actualMeanTemp = {
                    title: {
                        text: 'Praesent sagittis nunc lobortis.'
                    },

                    subtitle: {
                        text: 'Praesent in fringilla.'
                    },

                    yAxis: {
                        title: {
                            text: 'yAxis'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },

                    plotOptions: {
                        series: {
                            pointStart: 2010
                        }
                    },

                    series: [{
                        name: 'serie1',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                    }, {
                        name: 'serie2',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                    }]
                }
            };

            renderGraficas.comparativaAccidentesFatales = function(periodo1, periodo2) {
                $scope.chartConfigFatalAccidents = {
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: 'Nam convallis non tortor.'
                    },
                    subtitle: {
                        text: 'Etiam tempus ligula.'
                    },
                    xAxis: {
                        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                        tickmarkPlacement: 'on',
                        title: {
                            enabled: false
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'yAxis'
                        },
                        labels: {
                            formatter: function() {
                                return this.value / 1000;
                            }
                        }
                    },
                    tooltip: {
                        split: true,
                        valueSuffix: ' millions'
                    },
                    plotOptions: {
                        area: {
                            stacking: 'normal',
                            lineColor: '#666666',
                            lineWidth: 1,
                            marker: {
                                lineWidth: 1,
                                lineColor: '#666666'
                            }
                        }
                    },
                    series: [{
                        name: 'Serie1',
                        data: [502, 635, 809, 947, 1402, 3634, 5268]
                    }, {
                        name: 'Serie2',
                        data: [106, 107, 111, 133, 221, 767, 1766]
                    }, {
                        name: 'Serie3',
                        data: [163, 203, 276, 408, 547, 729, 628]
                    }]
                }
            };

            renderGraficas.comparativaFatalidades = function(periodo1, periodo2) {
                $scope.chartConfigFatalities = {
                    chart: {
                        type: 'area'
                    },
                    title: {
                        text: 'Maecenas enim dui, interdum et posuere.'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        allowDecimals: false,
                        labels: {
                            formatter: function() {
                                return this.value; // clean, unformatted number for year
                            }
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'yAxis'
                        },
                        labels: {
                            formatter: function() {
                                return this.value / 1000 + 'k';
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name} foo <b>{point.y:,.0f}</b><br/>bar {point.x}'
                    },
                    plotOptions: {
                        area: {
                            pointStart: 1940,
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Serie1',
                        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
                        ]
                    }, {
                        name: 'Serie2',
                        data: [null, null, null, null, null, null, null, null, null, null,
                            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                            4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                            15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                            33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                            35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                            21000, 20000, 19000, 18000, 18000, 17000, 16000
                        ]
                    }]

                }
            };

        } // end of function Controller
    ]
});