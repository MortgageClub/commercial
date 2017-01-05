import React, { Component } from 'react';
import { fetch, getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlogSidebar from './_BlogSiderbar';
import CommentForm from './_CommentForm';

class BlogDetails extends Component {
  componentDidMount() {
    if (this.props.params.id) {
      this.props.fetch(this.props.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id && newProps.params.id != this.props.params.id) {
      this.props.fetch(newProps.params.id);
    }
  }

  render() {
    const blog = this.props.blog_details;
    return (
      <div className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12 col-md-push-4">
              {
                blog
                ?
                  <div className="blog-details-area">
                    <div className="blog-details-image">
                      <img src={blog.image_full_url} />
                    </div>
                    <div className="blog-details-title-time">
                      <h5>{blog.title}</h5>
                      <p>{blog.created_at}</p>
                    </div>
                    <div className="blog-details-desctiption mb-60" dangerouslySetInnerHTML={{__html: blog.content}}>
                    </div>
                    <div className="blog-details-share-tags clearfix mb-75">
                      <div className="blog-details-share f-right">
                        <ul className="social-media">
                          <li>Share:</li>
                          <li><a><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li><a><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-details-author-post clearfix line-bottom pb-30 mb-115">
                      <div className="blog-details-author-image">
                        <a><img src={blog.author_avatar}/></a>
                      </div>
                      <div className="blog-details-author-desc">
                        <div className="blog-details-author-name">
                          <h6><a>{blog.author_name}</a></h6>
                          <p className="">Author</p>
                        </div>
                        <p>{blog.author_bio}</p>
                      </div>
                    </div>
                    {
                      blog && blog.comments && blog.comments.length > 0 
                      ?
                        <div className="pro-details-feedback mb-100">
                          <h5>Comments</h5>
                          {
                            blog.comments.map(comment => this.renderComment(comment))
                          }
                        </div>
                      :
                        null
                    }
                    <CommentForm params={this.props.params}/>
                  </div>
                :
                  null
              }
            </div>
            <BlogSidebar/>
          </div>
        </div>
      </div>
    )
  }

  renderComment(comment) {
    return (
      <div className="media" key={comment.id} style={{marginTop: 10}}>
        <a className="media-left">
          <img src="/images/avatar.png"/>
        </a>
        <div className="media-body">
          <h6 className="media-heading"><a>{comment.name}</a></h6>
          <p>{comment.content}</p>
          <a>{comment.time}</a>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog_details: state.blog.details,
    recent_blogs: state.blog.blogs_page,
    params: ownProps.params
  };
}

export default connect(mapStateToProps, { fetch, getAll })(BlogDetails);
