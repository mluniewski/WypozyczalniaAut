import React, { Component } from 'react';
import MoreInfo from './Person/MoreInfo';


class Extra extends Component {
    state = {
        moreInfo: [
          { id: 1, vin: 'W23D4', kolor: 'czerwony',  pochodzenie: "Polska", Zarejestrowany: "Tak" },
          { id: 2, vin: 'E3455F', kolor: 'niebieski',  pochodzenie: "Niemcy", Zarejestrowany: "Nie" },
          { id: 3, vin: 'K34123RL', kolor: 'żółty',  pochodzenie: "Austria", Zarejestrowany: "Nie" },
        ],
        otherState: 'some other value',
        showMoreInfo: false
      }
    
      nameChangedHandlers = ( event, id ) => {
        const infoIndex = this.state.moreInfo.findIndex(p => {
          return p.id === id;
        });
    
        const info = {
          ...this.state.moreInfo[infoIndex]
        };
    
        info.kolor = event.target.value;
    
        const moreInfo = [...this.state.moreInfo];
        moreInfo[infoIndex] = info;
    
        this.setState( {moreInfo: moreInfo} );
      }
      toggleMoreInfoHandler = () => {
        const doesShow = this.state.showMoreInfo;
        this.setState( { showMoreInfo: !doesShow } );
      }
    
      render () {
        const style = {
          backgroundColor: 'light-grey',
          font: 'inherit',
          border: '2px solid red',
          padding: '1px',
          cursor: 'pointer'
        };
/*
        deleteInfoHandlers = (infoIndex) => {
            const moreInfo = [...this.state.moreInfo];
            moreInfo.splice(infoIndex, 1);
            this.setState({moreInfo: moreInfo});
          }
    */
        let moreInfo = null;
    
        if ( this.state.showMoreInfo ) {
          moreInfo = (
            <div>
              {this.state.moreInfo.map((info, index) => {
                return <MoreInfo
                //click={() => this.deleteInfoHandlers(index)}
                  vin={info.vin}
                  kolor={info.kolor} 
                  pochodzenie={info.pochodzenie}
                  Zarejestrowany={info.Zarejestrowany}
                  key={info.id}
                  changed={(event) => this.nameChangedHandlers(event, info.id)} />
              })}
             
            </div>
          );
        }
    
        return (
            <div className="Extra">
              <p>Kiknij poniżej żeby rozwinąć więcej info</p>
              <button
                style={style}
                onClick={this.toggleMoreInfoHandler}>Pokaż</button>
              {moreInfo}
            </div>
          );
        }
      }

export default Extra;