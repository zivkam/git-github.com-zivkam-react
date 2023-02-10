import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <span class="copyright">Autorsko prava &copy; Galerija Vise od slike</span>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <Link>
                                        <i class="fab fa-youtube"></i>
                                    </Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link>
                                        <i class="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link>
                                        <i class="fab fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-inline quicklinks">
                                <li class="list-inline-item">
                                    <Link>Politika privatnosti</Link>
                                </li>
                                <li class="list-inline-item">
                                    <Link>Pravila koriscenja</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;