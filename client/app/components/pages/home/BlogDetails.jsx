import React, { Component } from 'react';
import { fetch, getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { formatDate, formatTime } from '../../../utils/FormatUtils';
import { Link } from 'react-router';

class BlogDetails extends Component {
  componentDidMount() {
    if (this.props.params.id) {
      this.props.fetch(this.props.params.id);
    }
    this.props.getAll(4);
  }
  render() {
    return (
      <div className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              {
                this.props.blog_details
                ?
                  <div className="blog-details-area">
                    <div className="blog-details-image">
                      <img src={this.props.blog_details.image_url} />
                    </div>
                    <div className="blog-details-title-time">
                      <h5>{this.props.blog_details.title}</h5>
                      <p>{formatTime(this.props.blog_details.created_at)}</p>
                    </div>
                    <div className="blog-details-desctiption mb-60" dangerouslySetInnerHTML={{__html: this.props.blog_details.content}}>
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
                        <a><img src="https://ca.slack-edge.com/T041L28A7-U041L2M1H-f402f0e0f79b-1024"/></a>
                      </div>
                      <div className="blog-details-author-desc">
                        <div className="blog-details-author-name">
                          <h6><a>Billy Tran</a></h6>
                          <p className="">Author</p>
                        </div>
                        <p>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                      </div>
                    </div>
                    <div className="pro-details-feedback mb-100">
                      <h5>Comments</h5>
                      <div className="media">
                        <a className="media-left">
                          <img src="/images/avatar/1.jpg" />
                        </a>
                        <div className="media-body">
                          <h6 className="media-heading"><a>David Backhum</a></h6>
                          <p><span>6 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                          <a>Reply</a>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left">
                          <img src="/images/avatar/2.jpg" />
                        </a>
                        <div className="media-body">
                          <h6 className="media-heading"><a>Saniya Mirza</a></h6>
                          <p><span>8 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                          <a>Reply</a>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left">
                          <img src="/images/avatar/3.jpg" />
                        </a>
                        <div className="media-body">
                          <h6 className="media-heading"><a>Lionel Messi</a></h6>
                          <p><span>10 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                          <a>Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-details-reply leave-review">
                      <h5>Leave a Coment</h5>
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
            <div className="col-md-4 col-xs-12">
              <aside className="widget widget-search mb-30">
                <form action="#">
                  <input type="text" name="search" placeholder="Search..." />
                  <button type="button" className=""><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
              </aside>
              <aside className="widget widget-categories mb-50">
                <h5>Categories</h5>
                <ul className="widget-categories-list">
                  <li><a href="#">Apartment <span>1420</span></a></li>
                  <li><a href="#">Apartment Building <span>780</span></a></li>
                  <li><a href="#">Bungalow <span>670</span></a></li>
                  <li><a href="#">Corporate House <span>520</span></a></li>
                  <li><a href="#">Duplex Villa <span>350</span></a></li>
                </ul>
              </aside>
              <aside className="widget widget-recent-post mb-50">
                <h5>Recent Post</h5>
                <div className="row">
                  {
                    this.props.recent_blogs && this.props.recent_blogs.map(recent_blog => this.renderRecentBlog(recent_blog))
                  }
                </div>
              </aside>
              <aside className="widget widget-archive mb-50">
                <h5>Archive</h5>
                <ul className="widget-archive-list">
                  <li><a href="#">August <span>2016</span></a></li>
                  <li><a href="#">June <span>2016</span> </a></li>
                  <li><a href="#">May <span>2016</span> </a></li>
                  <li><a href="#">April <span>2016</span> </a></li>
                  <li><a href="#">March <span>2016</span> </a></li>
                </ul>
              </aside>
              <aside className="widget widget-twitter mb-60">
                <h5>Latest Tweets</h5>
                <div className="single-twette">
                  <div className="twitter-icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div className="tweet-brief">
                    <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor  <span>Ronchi / 3 hour ago</span></p>
                  </div>
                </div>
                <div className="single-twette">
                  <div className="twitter-icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div className="tweet-brief">
                    <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor  <span>Ronchi / 3 hour ago</span></p>
                  </div>
                </div>
                <div className="single-twette">
                  <div className="twitter-icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div className="tweet-brief">
                    <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor  <span>Ronchi / 3 hour ago</span></p>
                  </div>
                </div>
              </aside>
              <aside className="widget widget-add mb-0">
                <div className="widget-add-item">
                  <div className="widget-add-image">
                    <a href="#"><img src="/images/others/add.jpg" /></a>
                    <div className="widget-add-info">
                      <h5><a href="#"><span>25% off</span> <br/> Build Your <br/> Dream with Us</a></h5>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderRecentBlog(recentBlog) {
    return (
      <div className="col-md-12 col-sm-6 col-xs-12">
        <article className="recent-post-item">
          <div className="recent-post-image">
            <Link to={`/blog/${recentBlog.slug}`}><img src={recentBlog.image_url} /></Link>
          </div>
          <div className="recent-post-info">
            <div className="recent-post-title-time">
              <h5><Link to={`/blog/${recentBlog.slug}`}>{recentBlog.title}</Link></h5>
              <p>{formatTime(recentBlog.created_at)}</p>
            </div>
            <p>{recentBlog.short_description}</p>
          </div>
        </article>
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
