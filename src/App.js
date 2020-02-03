import React, {Component} from 'react';
import './App.css';
import PowerPlantsData from './components/PowerPlants/PowerPlantsData.js';
import Select from 'react-select';
import SearchStyles from './components/Filters/SelectFilter.module.css';

const options = [
  { value: 'WIND_ONSHORE', label: 'WIND' },
  { value: 'BIOMASS', label: 'Biomass' },
  { value: 'HYDRO', label: 'Hydro' },
  { value: null , label: 'All' }
];

class App extends Component {

  state = {
    selectedOption: null,
  };
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
  
    return (
      <div className="App">
        <div className={SearchStyles.selectButton} >
              <p>Select The Plant Type: </p>
                <Select value = {this.selectedOption}
                        onChange = {this.handleChange} 
                        options = {options} />              
          
          </div>
        <h1>Power Plants Data!</h1>
        <PowerPlantsData powerPlantType = {this.state.selectedOption} />
      </div>
    );
  }
}

export default App;
