import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import about from '../../assets/images/aboutusbanner.jpg';
//import AboutUs from '../../assets/images/about-us.jpg';
import Profile from '../../assets/images/smallprofile.jpg';

//client logos
import Crate from '../../assets/images/clients/crate.png';
import JLL from '../../assets/images/clients/jll.png';
import Spencer from '../../assets/images/clients/spencer.png';
import Walmart from '../../assets/images/clients/walmart.png';

import '../../assets/css/about.css';

var backgroundStyle = {
    backgroundImage: `url(${about})`,
};

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Helmet defaultTitle="About &#183; Guideline Solutions" />
                <div className="banner-header" style={backgroundStyle}>
                </div>
                <div className="background-highlight">
                    
                    <div>
                        <div className="t-pad-50 text-center grey-font-color container">
                            <h2>ABOUT US</h2>
                            <div className="page-divider t-pad-30"><div></div></div>
                            <div className="about-us t-pad-30 b-pad-80">
                                <div>We believe there's a better way to build software, to work with clients, and to do business.&nbsp;&nbsp;Guideline Solutions is much more than a provider of enterprise software strategy and development.&nbsp;&nbsp;We are motivated by our daily opportunity to create a real impact in the world, and to enable our clients to achieve beyond their perceived potential.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container t-pad-60 b-pad-60">
                    <div><div className="text-center"><img src={Profile} className="rounded-circle profile-pic border border-dark" alt="profile" /></div></div>
                    <div className="t-pad-40">
                        <div className="text-center">
                            <h2>Jason Sarelas</h2>
                            <div className="page-divider t-pad-20"><div></div></div>
                            <h5 className="t-pad-10"><i>President & CEO</i></h5>
                        </div>
                    </div>
                    <div className="t-pad-40 sarelas-bio">
                        <p>Jason founded Guideline Solutions in 2006 working as an independent contractor in the greater Chicagoland area.</p>
                        <p>Jason is a skilled senior consultant with 22 years of full stack development experience; with a wide range of technical expertise including mobile, web, client server, UX/UI design, database architecture, cloud solutions, leadership and management.</p>
                        <p>
                            Major strength is in enterprise architecture with extensive knowledge in security, identity, and authentication. </p>
                        <p>
                            Expertise in gathering requirements, understand business requirements, translating them into technical solutions, leading and managing a team of developers to deliver projects on time.</p>
                        <p>
                            Highly self-motivated, detail-oriented, and flexible individual with strong interpersonal skills.</p>
                        <p>
                            Comprehensive knowledge of the following technologies: Azure, Google Cloud Platform, OKTA, SSO, OAuth, Active Directory, .NET (C#), .NET Core, MVC, SQL Server, MongoDB, MariaDB, Entity Framework, LINQ, WCF, Rest Web API, GraphQL, JavaScript, Typescript, Node.js, React, Redux, Redux-Saga, Angular, Vue, Vuex, PWA, Webpack, Grunt, jQuery, JSON, XML, XSLT, HTML5, CSS and Sass.
                        </p>
                    </div>
                    <div className="text-center t-pad-40"><h5>Had the privilege of working with these previous clients.</h5></div>
                    <div className="text-center">

                        <img className="walmart client-logo" src={Walmart} alt="walmart" />
                        <img className="jll client-logo" src={JLL} alt="jll" />
                        <img className="crate client-logo" src={Crate} alt="crate" />
                        <img className="spencer client-logo" src={Spencer} alt="spencer" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;