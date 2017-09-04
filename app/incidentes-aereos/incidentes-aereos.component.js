'use strict';

angular.
module('incidentesAereos').
component('incidentesAereos', {
    templateUrl: 'incidentes-aereos/incidentes-aereos.template.html',
    controller: ['$scope', '$routeParams', '$http', 'Rest',
        function IncidentesAereosController($scope, $routeParams, $http, Rest) {

          var renderGraficas = {};
            
            //
            $scope.chartConfigIncidents = {};
            $scope.chartConfigFatalAccidents = {};
            $scope.chartConfigFatalities = {};


            //
            $http.get('http://localhost:8080/backend/api/aerolineas/comparativa/incidentes').
              then(function successCallback(response) {
                console.log(response.data);
                var cantidadPeriodo1 = response.data["periodo1"];
                var cantidadPeriodo2 = response.data["periodo2"];
                renderGraficas.comparativaIncidentes(cantidadPeriodo1, cantidadPeriodo2);

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
                $scope.chartConfigIncidents = {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Comparativa INCIDENTES'
                    },
                    subtitle: {
                        text: 'foo'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: "Incidentes"
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                    },

                    series: [{
                        name: 'Periodo',
                        colorByPoint: true,
                        data: [{
                            name: '1985 - 1999',
                            y: periodo1
                        }, {
                            name: '2000 - 2014',
                            y: periodo2
                        }]
                    }]

                }
            };

            renderGraficas.comparativaAccidentesFatales = function(periodo1, periodo2) {
                $scope.chartConfigFatalAccidents = {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Comparativa ACCIDENTES FATALES'
                    },
                    subtitle: {
                        text: 'foo'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: "Accidentes fatales"
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                    },

                    series: [{
                        name: 'Periodo',
                        colorByPoint: true,
                        data: [{
                            name: '1985 - 1999',
                            y: periodo1
                        }, {
                            name: '2000 - 2014',
                            y: periodo2
                        }]
                    }]

                }
            };

            renderGraficas.comparativaFatalidades = function(periodo1, periodo2) {
                $scope.chartConfigFatalities = {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Comparativa FATALIDADES'
                    },
                    subtitle: {
                        text: 'foo'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: "Fatalidades"
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                    },

                    series: [{
                        name: 'Periodo',
                        colorByPoint: true,
                        data: [{
                            name: '1985 - 1999',
                            y: periodo1
                        }, {
                            name: '2000 - 2014',
                            y: periodo2
                        }]
                    }]

                }
            };

        } // end of function Controller
    ]
});