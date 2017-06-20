import _ from 'lodash';
import './airportSelector.scss';
import FlightManagerService from '../../services/FlightManager.service';


class AirportSelectorComponent {
    constructor($scope,$element,$attrs, FlightManagerService) {

        this.list = [];
        this.title = $scope.$parent.home[$attrs.title] === null ? 'Select' : $scope.$parent.home[$attrs.selected];
        this.type = $attrs.listType;
        this.home = $scope.$parent.home;
        this.selection = $attrs.title;
        this.caseCade = $attrs.dependsOn;
        this.dataCache = null;
        this.disabled = false;

        FlightManagerService.getFlightData().then((resp)=> {
            if(this.caseCade) {
                this.disabled = true;
            }

            this.dataCache = resp;
            this.populateDropDown(resp);

            if(this.caseCade) {
            $scope.$watch(() => { return this.home[this.caseCade] }, (newValue) => {
                if(newValue) {
                    this.disabled = false;
                    this.populateDropDown(this.dataCache);
                }
            });
        }
        });
    }

    populateDropDown(resp){
        if(resp){
                _.forEach(resp[this.type], (item)=>{
                    this.list.push(item);
                });

                if(this.caseCade) {
                    switch(this.caseCade){
                        case 'destinationCountry':
                        case 'departureCountry':
                        if(this.type === 'airports') {  
                            let allAirports = [];
                            this.list.forEach((l) => {
                                allAirports.push(l);
                            });
                            if(this.home[this.caseCade]){
                                this.list =_.uniq(_.filter(allAirports, (a)=>{ return a.country.code === this.home[this.caseCade].code;}));
                            }
                            
                        }
                        break;
                        case 'destinationCountry': 
                        break;                        
                        default:
                        break;
                    }
                }
            }
    }

    selectOption (option) {       
        this.title = option.name;
        this.home[this.selection] = option;

    }

}

export default AirportSelectorComponent;