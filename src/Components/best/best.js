import React from 'react';
import ReactDOM from 'react-dom';
import './best.css'

class Best extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className = 'best-wrap' >
                <h3 className = 'best-top'>Best</h3>
                <span className= 'best-bottom'>{ this.props.bestScore }</span>
            </div>
        );
    }
}
export default Best;