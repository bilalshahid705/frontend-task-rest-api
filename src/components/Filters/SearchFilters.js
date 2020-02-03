import React, {Component} from 'react';
import Select from 'react-select';
import styles from './SelectFilter.module.css';

const options = [
    { value: 'WIND_ONSHORE', label: 'Wind' },
    { value: 'BIOMASS', label: 'Biomass' },
    { value: 'HYDRO', label: 'Hydro' },
    { value: null , label: 'All' }
  ];
  
class SearchFilter extends Component {
    state = {
        selectedOption: null,
      };
      
      handleChange = selectedOption => {
        this.setState({ selectedOption });
      };

    render(){
      return (
          <div className={styles.selectButton} >
              <p>Select The Plant Type: </p>
                <Select value = {this.selectedOption}
                        onChange = {this.handleChange} 
                        options = {options} />              
          
          </div>

      );
    }
  }
export default SearchFilter;