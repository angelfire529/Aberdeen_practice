import FlightListController from './flightList.controller';

const flightListComponent = {
    template: require('./flightlist.html'),
    controller: FlightListController,
    controllerAs: 'flightList',
    bindings: {
        flightInfo: '<'
    }
}

export default flightListComponent;