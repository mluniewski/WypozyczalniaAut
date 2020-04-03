import axios from 'axios';
import { Component } from 'react';


class carSite extends Component {
    state = {
       cars = []
    }
componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then (response => {
        this.setState({cars: response.data})
    })
}
render() {
    const cars = this.state.cars.map(car => {
         return <CarTable/> 
    } )
return (
     <div>
        {cars}
    </div>
)
}
}



export default carSite;