import React, { Component } from 'react';
import SingleService from './SingleService';

const services=[
    {
        title: 'Članska karta Galaksija', 
        description: 'Doživite našu galeriju u potpunosti! Godinu dana neograničen pristup i povlašćeni uslovi za kulturne i obrazovne programe.',
         
        icon: 'fad fa-users '},
    {
        title: 'Edukacija',
        description: 'Naš tim stručnjaka upoznaje posetioce svih uzrasta sa umetnicima i njihovim delima.',
        icon: 'fad  fa-graduation-cap'},
    {
        title: 'Obuka',
        description: 'Ako, poput nas, imate ambiciju da osmislite glaeriju koja odiše unikatnošću, otkrijte naš program obuke.',
        icon: 'fa-spinner'}

];

class Services extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">DODATNE USLUGE</h2>
                            <h3 className="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        {services.map((service,index) =>{
                            return <SingleService {...service} key={index} />
                         })}
                        
                       
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;