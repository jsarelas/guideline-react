import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazy-load';
import { FormattedDate } from 'react-intl';
import { fetchAPOD } from './actions';
import '../../assets/css/nasa.css';


class NASAPage extends Component {
    componentDidMount() {
        this.props.fetchAPOD();
    }

    render() {
        let Media;
        if (this.props.nasaAPOD.media_type === 'video') {
            Media = (<iframe id="nasa-video" title="Nasa Video" className="media-nasa" height="100%;" alt={this.props.nasaAPOD.title} src={this.props.nasaAPOD.url} frameBorder="0" allowFullScreen />)
        }
        else {
            Media = (<img className="media-nasa" alt={this.props.nasaAPOD.title} src={this.props.nasaAPOD.hdurl} />)
        }

        return (
            <div>
                <Helmet defaultTitle="NASA &#183; Guideline Solutions" />

                <div className="contact-form">
                    <div className="container t-pad-20 b-pad-20">
                        <div className="text-center"><h4>NASA - Picture of the day</h4></div>
                    </div>

                    <div className="media-nasa-div">
                        <LazyLoad>
                            {Media}
                        </LazyLoad>
                    </div>
                    <div className="container b-pad-60">
                        <div className="apod-date">
                            <FormattedDate value={!this.props.nasaAPOD.date ? new Date() : this.props.nasaAPOD.date} day="numeric"
                                month="long"
                                year="numeric" />
                        </div>
                        <div className="apod-title">{this.props.nasaAPOD.title}</div>
                        <div className="page-divider t-pad-10 b-pad-20"><div></div></div>
                        {this.props.nasaAPOD.explanation}<br />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { nasaAPOD: state.nasaAPOD }
}

export default connect(mapStateToProps, { fetchAPOD })(NASAPage);