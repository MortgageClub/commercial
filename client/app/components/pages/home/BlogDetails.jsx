import React, { Component } from 'react';
import { fetch, getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlogSidebar from './_BlogSiderbar';

class BlogDetails extends Component {
  componentDidMount() {
    if (this.props.params.id) {
      this.props.fetch(this.props.params.id);
    }
    this.props.getAll(4);
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
                    <div className="pro-details-feedback mb-100">
                      <h5>Comments</h5>
                      <div className="media">
                        <a className="media-left">
                          <img />
                        </a>
                        <div className="media-body">
                          <h6 className="media-heading"><a>David Backhum</a></h6>
                          <p><span>6 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                          <a>Reply</a>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left">
                          <img />
                        </a>
                        <div className="media-body">
                          <h6 className="media-heading"><a>Saniya Mirza</a></h6>
                          <p><span>8 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                          <a>Reply</a>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left">
                          <img />
                        </a>
                        <div className="media-body">
                          <h6 className="media-heading"><a>Lionel Messi</a></h6>
                          <p><span>10 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                          <a>Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-details-reply leave-review">
                      <h5>Leave a Comment</h5>
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <input type="text" name="name" placeholder="Your name" />
                          </div>
                          <div className="col-md-6">
                            <input type="email" name="email" placeholder="Email" />
                          </div>
                        </div>
                        <textarea placeholder="Write here"></textarea>
                        <button type="button" className="submit-btn-1">SUBMIT COMMENT</button>
                      </form>
                    </div>
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
}

function mapStateToProps(state, ownProps) {
  return {
    blog_details: state.blog.details,
    recent_blogs: state.blog.blogs_page,
    params: ownProps.params
  };
}

export default connect(mapStateToProps, { fetch, getAll })(BlogDetails);
