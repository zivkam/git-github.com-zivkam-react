import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {BsCart4} from "react-icons/bs"
//import image22 from '../src/components/assets/img/logo.png'; 

class PageWrapper extends Component {

    render() {
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/home">Vise od slike</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Meni
        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/team">Pocetna</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/about">O nama</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/contact">Kontakt</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/cart">
                                   <BsCart4 color="orange">
                                  </BsCart4>
                                    <span>0</span>    
                                   
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children} 
            {/* this enables files to be inside of PageWraper.js s html() */}
        </div>
        );
    }
}

export default PageWrapper;