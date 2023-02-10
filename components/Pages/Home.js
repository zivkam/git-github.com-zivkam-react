import React, { Component } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/pozadina.jpg';
import Portfolio from '../Common/Portfolio';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                title="DOBRODOSLI"
                subtitle="VISE OD SLIKE"
                buttonText="O nama"
                link="/about"
                showButton={true}
                image={image}
                />

                <Portfolio/>
                <Footer/>
            </div>
        );
    }
}


export default Home;