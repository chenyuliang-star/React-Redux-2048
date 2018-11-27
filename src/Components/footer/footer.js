import React from "react";
import ReactDOM from "react-dom";
import './footer.css';
import imgSrc from '../../img/github.jpg'

class Footer extends React.Component {
    constructor (props){
        super(props)
    };
    render () {
        return (
            <div className = 'footer-wrap'>
               <hr />
               <div className = 'footer-content'>
                  <a href = 'https://github.com/wustcyl' target = '_black' title = 'github'><img src = { imgSrc } /></a>&nbsp;&nbsp;
                  <span>
                      Build with&nbsp;
                      <span>💗</span>
                      &nbsp;By&nbsp; <a href = 'mailto:geek.chenyuliang@gmail.com' id = 'cyl'  title = 'geek.chenyuliang@gmail.com'>CYL</a>
                  </span>
               </div>
            </div>
        );
    }
}

export default Footer;