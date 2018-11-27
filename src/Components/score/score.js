import React from 'react';
import ReactDOM from 'react-dom';
import './score.css'

class Score extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return ( 
            <div className = 'score-wrap' >
                <h3 className = 'score-top'>Score</h3>
                <span className = 'score-bottom'>{ this.props.curScore }</span>
            </div>
        );
    }
}
export default Score;