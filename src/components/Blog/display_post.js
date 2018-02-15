import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchPost, deletePost } from '../../actions/Blog/action';
import BlogHeader from './blog_header';

class DisplayPost extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/blog');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return (<div>Loading...</div>); 
        }

        return (
            <div className="container blog-content">
                <BlogHeader />
                <div className="t-pad-40 b-pad-40">
                    <Link className="sub-nav-item" to="/blog"><i className="arrow left icon"></i><span className="sub-nav-text">Back</span></Link>
                    </div>
                <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                </div>
                <div className="text-right t-pad-40 b-pad-70">
                    <button
                        className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this)}
                    >
                        Delete Post
                </button>
                </div>
            </div>
       );
    }
}

function mapStateToProps({ posts}, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(DisplayPost);