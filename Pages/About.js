import React, { Component } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/onama.jpg';


class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="O nama"
          subtitle="VISE OD SLIKE"
          showButton={false}
          image={image}
        />
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">KO SMO MI</h2>
                <h3 className="section-subheading text-muted"></h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                    <h4>
                            <br />O nama
                            </h4>
                      <img className="rounded-circle img-fluid" src="..src/assets/img/mi.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>Galerija</h4>
                        <h4 className="subheading">Vise od slike</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Prodaja slika i umetničke keramike je glavni deo popularisanja i 
                približavanja
                umetnosti širokom auditorijumu ljubitelja umetnosti u Beogradu, a i širom Srbije.
                Veliki broj umetnika izlaže i prodaje svoja dela u Galeriji Vise od slike. 
                Umetničke slike u svim tehnikama, ulje na platnu, akvarel, pastel, grafika, 
                akril su dostupne u raznim formatima i povoljnim cenama.
                Savremena umetnost i dela starih majstora na jednom mestu, u omiljenoj galeriji mnogih Beograđana.</p>
                      </div>
                    </div>
                  </li>
                 
                  
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Slika govori
                            <br />vise od
                            <br />1000 reci!</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>

    )
  }
}

export default About;