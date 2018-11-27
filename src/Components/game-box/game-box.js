import React from 'react';
import ReactDOM from 'react-dom';
import './game-box.css';
 

class GameBox extends React.Component{
    constructor (props) {
        super(props) ;
    };

    componentDidMount () {
        const { moveUpAction, randomAction ,moveDownAction, moveLeftAction, 
            moveRightAction, gameSuccessAction} = this.props;
       
        window.addEventListener("keypress" , function (event) {
            
            if (event.which == 119 ) {
                moveUpAction();

                gameSuccessAction();
                randomAction();  
            } else if (event.which == 115){
                moveDownAction();
                gameSuccessAction();
                randomAction();
            } else if (event.which == 97) {
                moveLeftAction();
               
                gameSuccessAction();
                randomAction();
            } else if (event.which == 100) {
                moveRightAction();
                gameSuccessAction();
                randomAction();
            }
        })
    }
    render() {
        const { gameMapState } = this.props;
        const gameMap = [].concat.apply([], gameMapState);
        return (
            <div className = 'game-box-wrap' >
                <div className = 'game-box-content'>
                   <div className = 'game-box-item' key = {1}></div>
                   <div className = 'game-box-item' key = {2}></div>
                   <div className = 'game-box-item' key = {3}></div>
                   <div className = 'game-box-item' key = {5}></div> 
                   <div className = 'game-box-item' key = {6}></div>
                   <div className = 'game-box-item' key = {7}></div>
                   <div className = 'game-box-item' key = {8}></div>
                   <div className = 'game-box-item' key = {9}></div>
                   <div className = 'game-box-item' key = {10}></div>
                   <div className = 'game-box-item' key = {11}></div>
                   <div className = 'game-box-item' key = {12}></div>
                   <div className = 'game-box-item' key = {13}></div>
                   <div className = 'game-box-item' key = {14}></div>
                   <div className = 'game-box-item' key = {15}></div>
                   <div className = 'game-box-item' key = {16}></div>
                   <div className = 'game-box-item' key = {17}></div>
                </div>
                <div className = 'game-box-cover'>
                {
                    gameMap.map(num => {
                        if (num != 0) return ( <div className = { `cover-item cover-${num}-item`} key = {Math.random()} > { num }</div>);
                        else return (<div className = { `game-box-item`} key = {Math.random() } > </div> );
                    })
                }
                </div>
            </div>
             
        );
    }
}
export default GameBox;