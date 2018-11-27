import React from 'react';
import ReactDOM from 'react-dom';
import Score from '../score/score.js'
import Best from '../best/best.js'
import NewGame from '../new-game/new-game.js'
import './header.css';
import { Provider } from "react-redux";


class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const { currentScore, bestScore, newGameAction} = this.props;
         
        return (
            <div className = 'header-wrap'>
                 <div className = 'header-top'>
                    <h1>2048</h1>
                    <Score curScore = { currentScore }/>  
                    <Best bestScore = { bestScore }/>  
                 </div>
                 <div className = 'header-bottom'>
                   <div className = 'header-bottom-word'>
                    <span>Play 2048 Game Online</span><br />
                    <span>
                       Click <a href = '#' id = 'link'>2048</a> to know how to play 2048!
                    </span>
                   </div>
                   <NewGame newGameAction = {newGameAction}/>
                 </div>
            </div>
         
        );
    }
}

export default Header;

