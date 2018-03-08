import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Captcha from '../Captcha';
import FormTextArea from '../Forms/textarea';

import { createContactUs } from './actions';
import contact from '../../assets/images/connect.jpg';
import '../../assets/css/contact.css';


var backgroundStyle = {
    backgroundImage: `url(${contact})`,
};

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageSuccess: '',
            submitted: false
        };
    }
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <input
                    className="form-control"
                    type={field.type}
                    placeholder={field.label}
                    {...field.input}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    renderTextArea(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <input
                    className="form-control"
                    type={field.type}
                    placeholder={field.label}
                    {...field.input}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }
    
    //redux form passes values from form below
    onSubmit(values) {
        //spinner
        this.props.createContactUs(values, () => {
            this.setState({
                messageSuccess: 'Thank you for reaching out to us.  Someone will be in touch with you shortly!',
                submitted: true
            });
            //close spinner
        });
    }

    captchaChange() {
        console.log('come on react');
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <Helmet defaultTitle="Contact &#183; Guideline Solutions" />

                <div className="banner-header" style={backgroundStyle} />
                <div className="contact-form">
                    <div className="container t-pad-50 b-pad-60">
                        <div className="text-center"><h2>CONTACT US</h2></div>
                        <div className="page-divider t-pad-30"><div></div></div>
                        <div className="text-center t-pad-30 contact-head">Got a question or project?</div>
                        <div className="text-center contact-subhead b-pad-60">Drop us a line!</div>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="FIRST NAME"
                                name="firstName"
                                type="text"
                                component={this.renderField}
                            />
                            <Field
                                label="LAST NAME"
                                name="lastName"
                                type="text"
                                component={this.renderField}
                            />
                            <Field
                                name="email"
                                type="email"
                                component={this.renderField}
                                label="EMAIL"

                            />
                            <Field
                                label="PHONE"
                                name="phone"
                                type="text"
                                component={this.renderField}
                            />
                            <Field
                                label="COMPANY"
                                name="company"
                                type="text"
                                component={this.renderField}
                            />
                            <Field placeholder="YOUR QUESTION OR A BIT ABOUT YOUR PROJECT" name="comments" component={FormTextArea} />

                            <div className="text-center t-pad-40 b-pad-70">
                                <div className="gl-recaptcha-center">
                                    <Field name='captcharesponse' component={Captcha} />
                                </div>
                                <div className="t-pad-40">
                                    <button disabled={this.state.submitted} type="submit" className="btn btn-success r-mar-10">LET'S GET STARTED!</button>
                                </div>
                                <div className="t-pad-20 text-success text-bold">
                                    {this.state.messageSuccess}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    //console.log(values);
    const errors = {};

    //Validate the inputs from 'values'
    if (!values.firstName) {
        errors.firstName = "* Enter a first name.";
    }
    if (!values.lastName) {
        errors.lastName = "* Enter a first name.";
    }
    if (!values.email) {
        errors.email = "* Enter an email address.";
    }
    else {
        //valide email
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = '* Please enter valid email address.'
        }
    }
    if (!values.phone) {
        errors.phone = "* Enter a phone number.";
    }
    else {
        if (!/^\d{10}$/i.test(values.phone)) {
            errors.phone = "* Please enter a valid phone number. No spaces, no extra chararters. (xxxxxxxxxx)";
        }
    }
    if (!values.company) {
        errors.company = "* Enter a company name.";
    }

    if (!values.comments) {
        errors.comments = "* Please enter a question or a bit about your project.";
    }

    if (!values.captcharesponse) {
        errors.captcharesponse = "* Please click: I'm not a robot";
    }


    //if errors is empty, the form is fine to submit
    //if errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'AddContactUsForm'
})(
    connect(null, { createContactUs })(ContactPage)
    );