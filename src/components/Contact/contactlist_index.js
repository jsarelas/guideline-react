import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContactList } from './actions';


class ContactListPage extends Component {
    componentDidMount() {
        this.props.fetchContactList();
    }

    renderContactList() {
        return _.map(this.props.contactList, contact => {
            return (
                <li key={contact.id} className="list-group-item">
                    {contact.firstName} {contact.lastName}<br />
                    {contact.email}<br/>
                    {contact.phone} <br />
                    {contact.company}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <Helmet defaultTitle="Contact List &#183; Guideline Solutions" />

               
                <div className="contact-form">
                    <div className="container t-pad-50 b-pad-60">
                        <div className="text-center"><h2>CONTACT LIST (secure this page soon)</h2></div>
                        <div className="page-divider t-pad-30 b-pad-30"><div></div></div>
                        
                        <ul className="list-group">
                            {this.renderContactList()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { contactList: state.contactList }
}

export default connect(mapStateToProps, { fetchContactList })(ContactListPage);
