import React from 'react'

class AddButton extends React.Component {
    render () {
        return (
            <div>
                <button onClick= {this.props.clicked}> Dodataj auto </button>
            </div>
        )
    }
}