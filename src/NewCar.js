import React from 'react';

class Reservation extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        marka: '',
        model: '',
        rocznik: 0,
        cena: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangea = this.handleChangea.bind(this);
    this.handleChangeb = this.handleChange.bind(this);
    this.handleChangec = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({marka: event.target.marka});
  }


  handleChangea(event) {
    this.setState({model: event.target.model});
  }

  handleChangeb(event) {
    this.setState({rocznik: event.target.rocznik});
  }

  handleChangec(event) {
    this.setState({cena: event.target.cena});
  }

  handleSubmit(event) {
    alert('Informacje o dodanym aucie: ' + this.state.marka + " " + this.state.model + " " + this.state.rocznik + " " + this.state.cena);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Marka:
          <input type="text" value={this.state.marka} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Model:
          <input type="text" value={this.state.model} onChange={this.handleChangea} />
        </label>
        <br/>
        <label>
          Rocznik:
          <input type={Number} value={this.state.rocznik} onChange={this.handleChangeb} />
        </label>
        <br/>
        <label>
          Cena:
          <input type={Number} value={this.state.cena} onChange={this.handleChangec} />
        </label>
        <br/>
        
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

export default Reservation;