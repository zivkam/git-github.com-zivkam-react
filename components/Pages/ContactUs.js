import React, { Component } from 'react';
import Footer from '../Common/Footer';

class ContactUs extends Component {
    alertHandler = () => {
        alert("PORUKA JE POSLATA!");
      };
    render() {
        return (
            <div>
            <section id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading text-uppercase">KONTAKT</h2>
                            <h3 class="section-subheading text-muted"></h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input class="form-control" id="name" type="text" placeholder="Vase ime i prezime" required="required" data-validation-required-message="Ukucajte Vase ime" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" id="email" type="email" placeholder="E-mail adresa" required="required" data-validation-required-message="Ukucajte e-mail adresu" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" id="phone" type="tel" placeholder="Kontakt telefon" required="required" data-validation-required-message="Broj telefona." />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <textarea class="form-control" id="message" placeholder="Vasa poruka" required="required" data-validation-required-message="Ukcajte poruku."></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit" onClick={this.alertHandler}>Posalji</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            </div>
        );
    }
}


export default ContactUs;