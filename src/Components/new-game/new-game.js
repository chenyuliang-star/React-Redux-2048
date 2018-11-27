import React from 'react';
import ReactDOM from 'react-dom';
import './new-game.css'

class NewGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { newGameAction } = this.props;
        return (
           <button className = 'btn-new-game' onClick = { newGameAction }>New Game</button>
        );
    }
}
export default NewGame;