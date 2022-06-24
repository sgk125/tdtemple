import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (

            <footer className="footer bg-img">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="footer-logo">
                            <Link className="footer-logo__link" to="/"><img className="footer-logo__img" src="assets/images/narasimha.svg" alt="logo"/></Link>
                        </div>
                        {/* <!-- footer socials start--> */}
                        <ul className="footer-socials">
                            <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                        {/* <!-- footer socials end--> */}
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h4 className="footer__title">Contacts</h4>
                        <div className="footer-contacts">
                            <p className="footer-contacts__address">Sri Lakshmi Narasimha Temple, Thirumala Bhagom PO,Thuravoor,Alappuzha</p>
                            <p className="footer-contacts__phone">Phone: <a href="tel:+31859644725">+31 85 964 47 25</a></p>
                            <p className="footer-contacts__mail">Email: <a href="mailto:support@helpo.org">support@aattd.org</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h4 className="footer__title">Menu & Links</h4>
                        {/* <!-- footer nav start--> */}
                        <nav>
                            <ul className="footer-menu">
                                <li className="footer-menu__item footer-menu__item--active"><Link className="footer-menu__link" to="/">Home</Link></li>
                                <li className="footer-menu__item"><Link className="footer-menu__link" to="/">Blog</Link></li>
                                <li className="footer-menu__item"><Link className="footer-menu__link" to="/">About</Link></li>
                                <li className="footer-menu__item"><Link className="footer-menu__link" to="/">Contacts</Link></li>
                                <li className="footer-menu__item"><Link className="footer-menu__link" to="/">Pages</Link></li>
                                <li className="footer-menu__item"><Link className="footer-menu__link" to="/">Elements</Link></li>
                                <li className="footer-menu__item"><Link className="footer-menu__link" to="/">Causes</Link></li>
                            </ul>
                        </nav>
                        {/* <!-- footer nav end--> */}
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h4 className="footer__title">e-Kanika</h4>
                        <p>Lorem ipsum dolor sit amet consectetur</p><a className="button footer__button button--filled" href="#" >Kanika</a>
                    </div>
                </div>
                <div className="row align-items-baseline">
                    <div className="col-md-6">
                        <p className="footer-copyright">© 2022 AATTD Thuravoor</p>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-privacy"><a className="footer-privacy__link" href="#">Privacy Policy</a><span className="footer-privacy__divider">|</span><a className="footer-privacy__link" href="#">Term and Condision</a></div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
