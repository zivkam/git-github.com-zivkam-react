import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import image1 from '../assets/img/dragan malesevic tapi duh tesle.jpg'; 
import image2 from '../assets/img/milena pavlovic barili Zenski_krilati_torzo.jpg'; 
import image3 from '../assets/img/milic od macve cekajuci hrista.jpeg'; 
import image4 from '../assets/img/Nadezda-Petrovic-Tri-srpske-seljanke-1905..jpg'; 
import image5 from '../assets/img/petar lubarda kosovski boj.jpg'; 
import image6 from '../assets/img/Sava_Šumanović_-_Pijana_lađa.jpg'; 
import image7 from '../assets/img/Seoba_Srba-paja jovanovic.jpg'; 
import image8 from '../assets/img/Uroš_Predić_-_Siroče.jpg'; 
import image9 from '../assets/img/Jovan Bijelic Mala Dubravka.jpg'; 
import image10 from '../assets/img/Zora_Petrovic_-_Crnogorka.jpg'; 
import image11 from '../assets/img/Mladen Josic Ranjenici.jpg'; 
import image12 from '../assets/img/kameni-prolaz dusan kosovac.jpg'; 


const portfolio=[
    {
        
        title:'Duh Tesle ',
    subtitle:'Dragan Malesevic Tapi',
    image:image1},
    {
        title:'Zenski krilati torzo',
    subtitle:'Milena Pavlovic Barili',
    image:image2},
    {
        title:'Cekajuci Hrista',
    subtitle:'Milic od Macve',
    image:image3},
    {
        title:'Tri srpske seljanka',
    subtitle:'Nadezda Petrovic',
    image:image4},
    {
        title:'Kosovski boj',
    subtitle:'Petar Lubarda',
    image:image5},
    {
        title:'Pijana ladja',
    subtitle:'Sava Sumanovic',
    image:image6},
    {
        title:'Seoba Srba',
    subtitle:'Paja Jovanovic',
    image:image7},
    {
        title:'Siroce',
    subtitle:'Uros Predic',
    image:image8},
    {
        title:' Mala Dubravka',
    subtitle:'Jovan Bijelic',
    image:image9},
    {
        title:'Crnogorka',
    subtitle:'Zora Petrovic',
    image:image10},
    {
        title:'Ranjenici',
    subtitle:'Mladen Josic',
    image:image11},
    {
        title:'Kameni prolaz',
    subtitle:'Dusan Kosovac',
    image:image12}

];

class Portfolio extends Component {
   
    render() {
        return (
        
           
           <section className="bg-light" id="portfolio">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">EKSPONATI</h2>
                            <h3 className="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div className="row">

                    {portfolio.map((item,index)=>{
                        return <PortfolioItem {...item} key={index}/>
                    })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;