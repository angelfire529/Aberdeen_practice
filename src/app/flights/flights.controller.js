import './flights.scss';

import FlightManagerService from '../services/FlightManager.service';


class FlightsController {
    constructor(FlightManagerService, $stateParams) {
        this._flightManagerService = FlightManagerService;
        this.params = $stateParams.flightInfo;
        this.data = [];
        
        if(this.params) {
             this._flightManagerService.setFlightInformation(this.params);
        }
    }    

}

export default FlightsController;