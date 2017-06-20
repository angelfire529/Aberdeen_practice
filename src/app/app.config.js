//vendor js
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.js';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome//scss/font-awesome.scss';
import '../style/style.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

//controllers
import HomeController from './home/home.controller';
import FlightsController from './flights/flights.controller';

//componenents
import flightListComponent from './components/flightList/flightList.component';
import airportSelectorComponent from './components/airportSelector/airportSelector.component'; 

//services
import flightManagerService from './services/FlightManager.service';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider
     .when('/flights', '/flights')
    .otherwise('/home');

    let start = {
        name: 'start',
        url: '/',
        template: require('./app.html'),
    }

    let home = {
        name: 'home',
        url: '/home',
        template: require('./home/home.html'),
        controller: HomeController,
        controllerAs: 'home'
    }

    let flights  = {
        name: 'home.flights',
        url: '/flights',
        template: require('./flights/flights.html'),
        controller: FlightsController,
        controllerAs: 'flights',
        params: { flightInfo: null }
    }

    $stateProvider.state(start)
    $stateProvider.state(home)
    $stateProvider.state(flights);
});

/**
 * registering components, controller, services
 */

app.component('flightList', flightListComponent);

app.component('airportSelector', airportSelectorComponent);

app.service('FlightManagerService', flightManagerService);

    

export default app;