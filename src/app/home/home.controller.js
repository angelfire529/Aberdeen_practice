import './home.scss';
import FlightManagerService from '../services/FlightManager.service';

class HomeController {
    constructor(FlightManagerService, $state) {
        this._flightManagerService = FlightManagerService;
        this._$state = $state;
        this.departureAirport = null;
        this.departureCountry = null;
        this.destinationCountry = null;
        this.destinationAirport = null;
        this.init().then((resp) => {
            this.data = resp;
        });


    }

    init() {
        return this._flightManagerService.getFlightData();
    }

    getFlights(valid) {
        if (valid) {
            let params = {
                flightInfo: {
                    departureAirport: this.departureAirport,
                    departureCountry: this.departureCountry,
                    destinationAirport: this.destinationAirport,
                    destinationCountry: this.destinationCountry
                }
            };
            this._$state.go('home.flights', params);
        }
        else {
            alert('Please select from each of the drop downs.');
            return;
        }
    }

    validate() {
        let valid = false;

        if (this.departureAirport && this.departureCountry && this.destinationAirport && this.destinationCountry) {
            if (this.departureAirport.name !== this.destinationAirport.name) {
                valid = true;
            }
        }
        return valid;
    }

}

export default HomeController;