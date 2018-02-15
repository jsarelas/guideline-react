import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/Blog/action';
import { Link } from 'react-router-dom';
import BlogHeader from './blog_header';

import '../../assets/css/blog.css';

class BlogIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderBlog() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className="list-group-item">
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="container blog-content">
                <BlogHeader/>
                <div className="text-right t-pad-40 b-pad-20">
                    <Link className="btn btn-primary" to="/blog/add">
                        Add a Post
                    </Link>
                </div>
                <div className="b-pad-50">
                <ul className="list-group">
                    {this.renderBlog()}
                </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(BlogIndex);