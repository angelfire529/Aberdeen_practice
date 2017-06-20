import angular from 'angular';
import 'angular-mocks/angular-mocks';

import app from '../../app';
import airportSelectorComponent from './airportSelector.component';
import FlightManagerService from '../../services/FlightManager.service';

describe('Airport Selector Component', () => {
    let $compile;

    beforeEach(angular.mock.module(app));

    beforeEach(angular.mock.inject((_$compile_) => {
        $compile = _$compile_;
    }));

    it('should call selectOption when updating selection', () => {
        let scope = {};
        let html = $compile('<airport-selector list-type="countries" title="departureCountry"></airport-selector>')(scope).html();
        expect()
});
})