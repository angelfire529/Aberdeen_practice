import app from '../app';
//import flightManagerService from './FlightManager.service';

import angular from 'angular';
import 'angular-mocks/angular-mocks';

describe("Flight manager service", () => {
    let data, flightManagerService;

    beforeEach(()=>{
        angular.mock.module('app');
    });

    beforeEach(inject((_$http_, _$q_, _flightManagerService_)=>{

    }));

});
