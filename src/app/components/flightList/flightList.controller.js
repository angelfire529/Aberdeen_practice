
import FlightManagerService from '../../services/FlightManager.service';

class FlightListController {
    constructor($scope, $element, $attrs, FlightManagerService) {
        this.data = null;
        this._flightManagerService = FlightManagerService;
        
        if(this._flightManagerService.getFlightInformation()) {
            this.getFlights(this._flightManagerService.getFlightInformation());
        }
    }

    getFlights(params){
        if(!params) {
            return;
        }
        let result = this._flightManagerService.getDepartureAndDestinationCode(params);
        this._flightManagerService.getAllFlightsToDestination(result.origin, result.destination)
        .then((resp) => {
            this.data = this._flightManagerService.processFlights(params, resp.data.flights);
        });
    }

}

export default FlightListController;