
import React from 'react';
import axios from '../../Axios';
import AddButton from '../../Button/AddButton';


class listOfCars extends React.Component {
    state = {
        cars: null,
    }

componentDidMount () {
    axios.get('/cars.json')
        .then (response => {
            const committedCars = [];
            for(let key in response.data) {
                committedCars.push({
                    ...response.data[key],
                    id: key
                })
            }
            this.setState({cars: committedCars})
        })}
    render () {
        return (
            <div>
                <button onClick></button>
            </div>
        );
    };
}


export default listOfCars
