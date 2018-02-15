import React, { Component } from 'react';

const today = new Date();
class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="container">
                    <div className="footer-flex">
                        <div className="footer-item">
                            <div className="footer-info">
                                <a href="mailto:info@guidelinesolutions.com">
                                    <div><i className="mail outline icon"></i>
                                        <span className="footer-label">Email</span>
                                    </div>
                                    <div>info@guidelinesolutions.com</div>
                                </a>
                            </div>
                            <div className="footer-info">
                                <a href="tel:+17733922336">
                                    <div><i className="call icon"></i><span className="footer-label">Phone</span></div>
                                    <div>(773) 392-2336</div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="footer-info">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/1020+Horseback+Hollow,+Austin,+TX+78732/@30.3532897,-97.9074553,17z/data=!3m1!4b1!4m5!3m4!1s0x865b36e6196aa1fd:0x6f6eec459303ed8d!8m2!3d30.3532897!4d-97.9052666">
                                    <div><i className="marker icon"></i><span className="footer-label">Address</span></div>
                                    <div>1020 Horseback Hollow</div>
                                    <div>Austin, TX 78732</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-media">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/jason-sarelas-9aa0b317/" rel="noopener noreferrer" target="_blank"><i className="linkedin icon"></i></a></li>
                            <li><a href="https://github.com/jsarelas" rel="noopener noreferrer" target="_blank"><i className="github icon"></i></a></li>
                            <li><a href="https://twitter.com/JasonSarelas" rel="noopener noreferrer" target="_blank"><i className="twitter icon"></i></a></li>
                            <li><a href="https://www.facebook.com/guidelinesolutionsinc/" rel="noopener noreferrer" target="_blank"><i className="facebook f icon"></i></a></li>
                        </ul>
                    </div>
                    <div className="copyright-content">
                        <div className="d-inline-block">&#169; {today.getFullYear()} Guideline Solutions.</div>&nbsp;&nbsp;<div className="d-inline-block">All rights reserved.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;