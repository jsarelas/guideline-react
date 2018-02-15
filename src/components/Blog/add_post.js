import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../actions/Blog/action'
import BlogHeader from './blog_header';

class AddPost extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    //redux form passes values from form below
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/blog');
        });
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <div className="container blog-content">
                <BlogHeader />
                <div className="t-pad-40">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />
                    <Field
                        label="Contents"
                        name="content"
                        component={this.renderField}
                    />
                    <div className="text-right t-pad-40 b-pad-70">
                        <button type="submit" className="btn btn-primary r-mar-10">Submit</button>
                        <Link to="/blog" className="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

function validate(values) {
    //console.log(values);
    const errors = {};

    //Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "* Enter a title.";
    }
    if (!values.categories) {
        errors.categories = "* Enter some categories.";
    }
    if (!values.content) {
        errors.content = "* Enter some content please.";
    }

    //if errors is empty, the form is fine to submit
    //if errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'AddPostForm'
})(
    connect(null, { createPost })(AddPost)
    );