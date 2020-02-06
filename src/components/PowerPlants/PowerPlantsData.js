import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import styles from './PowerPlantsData.module.css';
// import SearchFilter from '../Filters/SearchFilters.js';

class PowerPlantsData extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            
            items: []
        };
    }
    // Loop through API
    componentDidMount(){
        this.update = setInterval(() => this.setState({ time: Date.now() + 10 }), 10000);
        this.getFetch();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    getFetch() {
        
        fetch('http://localhost:8081/power-plants')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            });
    }

    renderData(data){
        return(
            <div className = {styles.PowerPlanet}>
                <Table>
                    <tbody>
                        <tr>
                            <th className = {styles.TableTop}>Federal Network Agency Number</th>
                            <th className = {styles.TableTop}>Name</th>
                            <th className = {styles.TableTop}>Company Name</th>
                            <th className = {styles.TableTop}>Postal Code</th>
                            <th className = {styles.TableTop}>City</th>
                            <th className = {styles.TableTop}>Address</th>
                            <th className = {styles.TableTop}>State</th>
                            <th className = {styles.TableTop}>Start Date</th>
                            <th className = {styles.TableTop}>Status</th>
                            <th className = {styles.TableTop}>Type</th>
                            <th className = {styles.TableTop}>Net Nominal Power MegaWatt</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className = {styles.TableTop}>{data.bundesnetzagentur_number}</td>
                            <td className = {styles.TableTop}>{data.name}</td>
                            <td className = {styles.TableTop}>{data.company_name}</td>
                            <td className = {styles.TableTop}>{data.plz}</td>
                            <td className = {styles.TableTop}>{data.city}</td>
                            <td className = {styles.TableTop}>{data.address}</td>
                            <td className = {styles.TableTop}>{data.state}</td>
                            <td className = {styles.TableTop}>{data.start_date}</td>
                            <td className = {styles.TableTop}>{data.status}</td>
                            <td className = {styles.TableTop}>{data.type}</td>
                            <td className = {styles.TableTop}>{data.net_nominal_power_mw}</td>
                        </tr>          
                    </tbody>
                </Table>
            </div>
        );
    }
    render () {

        let  items = this.state.items;

        let powerPlantType = this.props.powerPlantType;
                
        return(

            items.filter((data) => {
                if(powerPlantType == null)
                    return data;
                else if(data.type.toString().toLowerCase().includes(powerPlantType.toString().toLowerCase()))
                    return data;
                
                }).map(data => {
                    return( this.renderData(data) )
                }   
            )
        )
    }
}

export default PowerPlantsData;
