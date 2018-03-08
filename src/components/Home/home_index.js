import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Background from '../../assets/images/banner.jpg';
import Footer from '../../assets/images/software.jpg';
import logo from '../../assets/images/logo.png';

var backgroundStyle = {
    backgroundImage: `url(${Background})`,
};
var footerStyle = {
    backgroundImage: `url(${Footer})`,
};

class HomePage extends Component {
    //<div className="text-center"><h1 className="bd-title">Guideline Solutions</h1></div>
    render() {
        return (
            <div>
                <Helmet defaultTitle="Home &#183; Guideline Solutions" />

                    <section className="home-page-banner" style={backgroundStyle}>
                        <div className="banner-text">
                            <div className="v-align-div">
                                <div className="text-center"><img src={logo} alt="logo" className="gl-logo-home" /></div>

                                <div className="page-divider t-pad-30"><div></div></div>
                                <div className="text-center t-pad-20"><h4 className="home-tag-line">Building applications that make businesses successful.</h4></div>
                            </div>
                        </div>
                    </section>
                <div className="container t-pad-50 b-pad-40">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Mission Statement</h1>
                            <p className="lead">To provide business efficient minded customers with high quality and cost effective custom software solutions which are consistently perceived as reliable, cost saving, and profit maximization.  We help our customers lower their operations cost, increase business efficiency, and accelerate their growth by streamlining the business process and simplifying data management with our software solutions.</p>
                        </div>
                    </div>
                    <div className="flex-box-3-col">
                        <div className="flex-item">
                            <div><i className="world icon"></i></div>
                            <div className="flex-title">WEB APPLICATIONS</div>
                            <div className="flex-desc r-mar-10 l-mar-10">We provide scalable, responsive, progressive web applications that can handle growth and allow for uninterrupted, high-quality user experiences.</div>
                        </div>
                        <div className="flex-item">
                            <div><i className="tablet icon"></i></div>
                            <div className="flex-title">MOBILE APPLICATIONS</div>
                            <div className="flex-desc r-mar-10 l-mar-10">We develop native or hybrid applications where your brand can become something that people carry with them wherever they go.</div>
                        </div>
                        <div className="flex-item">
                            <div><i className="unhide icon"></i></div>
                            <div className="flex-title">UI/UX DESIGN PROCESS</div>
                            <div className="flex-desc r-mar-10 l-mar-10">We care about understanding you and your customers, in service of creating experiences that deliver.</div>
                        </div>
                    </div>
                    <div className="flex-box-3-col b-pad-40">
                        <div className="flex-item">
                            <div><i className="cloud icon"></i></div>
                            <div className="flex-title">CLOUD COMPUTING</div>
                            <div className="flex-desc r-mar-10 l-mar-10">Whether migrating, integrating, or expanding capabilities, our cloud services include: PaaS, IaaS, SaaS, IoT.</div>
                        </div>
                        <div className="flex-item">
                            <div><i className="settings icon"></i></div>
                            <div className="flex-title">PROJECT MANAGEMENT</div>
                            <div className="flex-desc r-mar-10 l-mar-10">We pride ourselves on being objective, clear and relentlessly focused on delivering results for your business.</div>
                        </div>
                        <div className="flex-item">
                            <div><i className="idea icon"></i></div>
                            <div className="flex-title">REQUIREMENTS DEFINITION</div>
                            <div className="flex-desc r-mar-10 l-mar-10">We provide an optimal level of detail so that implementation teams know what needs to be done, but have the flexibility to build an elegant technical solution.</div>
                        </div>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Affordable Solutions</h1>
                            <p className="lead">Our clients are constantly impressed by the service and quality they receive at such a great price. We discount service rates, not our product excellence. "Quality and cost are everything" is not just a slogan-it's our approach to business.</p>
                        </div>
                    </div>
                </div>
                <section className="home-page-banner" style={footerStyle}>
                    <div className="banner-text">
                        <div className="v-align-div-bottom">
                            <div className="text-center t-pad-20 r-pad-10 l-pad-10"><h4>DESIGN LED, END-TO-END SERVICES</h4></div>
                            <div className="page-divider t-pad-30"><div></div></div>
                            <div className="text-center t-pad-20 footer-banner-text"><h5>From strategy to execution, our winning combination of innovative thinking, scientific design, sophisticated development, and advanced engineering ensure we're delivering fresh value to help you grow.</h5></div>
                        </div>
                    </div>
                </section>
                <div className="container t-pad-50 b-pad-40">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">High Quality Services</h1>
                            <p className="lead">Combining our solid business domain experience, technical expertise, profound knowledge of the latest industry trends and quality-driven delivery model, we offer progressive, one of a kind solutions. We work to turn your idea into a reality with software solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;