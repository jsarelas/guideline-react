import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import contact from '../../assets/images/connect.jpg';
import '../../assets/css/contact.css';

var backgroundStyle = {
    backgroundImage: `url(${contact})`,
};

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Helmet defaultTitle="Contact &#183; Guideline Solutions" />

                <div className="banner-header" style={backgroundStyle} /> 
                <div className="contact-form">
                    <div className="container t-pad-50 b-pad-60">
                        <div className="text-center"><h2>CONTACT US</h2></div>
                        <div className="page-divider t-pad-30"><div></div></div>
                        <div className="text-center t-pad-30 contact-head">Got a question or project?</div>
                        <div className="text-center contact-subhead">Drop us a line!</div>
                        <div>FIRST</div>
                        <div>LAST</div>
                        <div>EMAIL</div>
                        <div>PHONE</div>
                        <div>COMPANY</div>
                        <div>TITLE</div>
                        <div>YOUR QUESTION OR A BIT ABOUT YOUR PROJECT</div>
                        <div>LET"S GET STARTED! button</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;