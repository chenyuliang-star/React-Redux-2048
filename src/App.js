import Header from './Components/header/header.js';
import Footer from './Components/footer/footer.js';
import GameBox from './Components/game-box/game-box.js';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props) {
        super(props);
    };

   render () {
       const { currentScore, bestScore, gameMapState, newGameAction, moveUpAction, randomAction,
        moveDownAction, moveLeftAction, moveRightAction, gameSuccessAction } = this.props;
       return (
           <div>
               <Header currentScore= {  currentScore } 
               bestScore = { bestScore } 
               newGameAction = { newGameAction }/>
               <GameBox gameMapState = { gameMapState } 
               moveUpAction = { moveUpAction } 
               randomAction = { randomAction } 
               moveDownAction = { moveDownAction } 
               moveLeftAction = { moveLeftAction } 
               moveRightAction = { moveRightAction } 
               gameSuccessAction = { gameSuccessAction } />
               <Footer />
           </div>
       );
   }
}

export default App;