import angular from 'angular';
import _ from 'lodash';
import moment from 'moment';

class FlightManagerService {
    constructor($http, $q) {
        //this.flightData = null;
        this.$http = $http;
        this.$q = $q;
        this.flight_booking_selector_url = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';
        this.flightData = null;
        this.flightInformation = null;
    }

    getFlightData() {
        return this.$q((resolve) => {
            if (!this.flightData) {
                this.$http.get(this.flight_booking_selector_url).then((resp) => {
                    resolve(this.flightData = resp.data);
                })
            }
        });
    }

    getAllFlightsToDestination(origin, dest) {
        let url = `https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${origin}/to/${dest}/2014-12-02/2015-02-02/250/unique/?limit=15&offset-0`;
        return this.$http.get(url);
    }

    getDepartureAndDestinationCode (params) {
        let result = {
            origin: null,
            destination: null
        }

        result.origin = params.departureAirport.iataCode;
        result.destination = params.destinationAirport.iataCode;

        return result;
    }

    setFlightInformation (flightInfoObj) {
        this.flightInformation = flightInfoObj;
    }
    
    getFlightInformation () {
        return this.flightInformation;
    }

    processFlights (params, data) {
        _.forEach(data, (f)=>{
            f.DestinationAirport = params.destinationAirport;
            f.DepartingAirport = params.departureAirport;
            f.DestinationCountry = params.destinationCountry;
            f.DepartingCountry = params.departureCountry;
            f.dateFrom = moment(f.dateFrom).format('LLL');
            f.dateTo = moment(f.dateTo).format('LLL');
        });

        return data;
    }

}

export default FlightManagerService;