import React, { Component } from 'react';
import { getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { formatDate, formatTime } from '../../../utils/FormatUtils';
import { Link } from 'react-router';

class Blog extends Component {
  componentDidMount() {
    this.props.getAll(8);
  }
  render() {
    const recent_posts = this.props.blogs ? this.props.blogs.slice(0, 4) : [];
    return (
      <div className="wrapper">
        <div className="blog-area pt-115 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-push-4">
                <div className="row">
                  {
                    this.props.blogs && this.props.blogs.map(blog => this.renderBlog(blog))
                  }
                </div>
              </div>
              <div className="col-md-4 col-md-pull-8">
                <aside className="widget widget-search mb-30">
                  <form action="#">
                    <input type="text" name="search" placeholder="Search..."/>
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
                      recent_posts && recent_posts.map(recent_post => this.renderRecentPost(recent_post))
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
                <aside className="widget widget-latest-tweets mb-50">
                  <h5>Latest Tweets</h5>
                  <div className="tweets-item">
                    <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor </p>
                    <p>Ronchi / 3 hour ago</p>
                  </div>
                  <div className="tweets-item">
                    <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor </p>
                    <p>Ronchi / 3 hour ago</p>
                  </div>
                  <div className="tweets-item">
                    <p><a href="#">@Lorem ipsum</a> dolor sit amet, costetur adipiscing elit, sed do eiusmod tempor </p>
                    <p>Ronchi / 3 hour ago</p>
                  </div>
                </aside>
                <aside className="widget widget-add mb-0">
                  <div className="widget-add-item">
                    <div className="widget-add-image">
                      <a href="#"><img src="images/others/add.jpg" alt=""/></a>
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
      </div>
    )
  }

  renderBlog(blog) {
    return (
      <div className="col-sm-6 col-xs-12" key={"blog_" + blog.slug} >
        <article className="blog-item bg-gray">
          <div className="blog-image">
            <Link to={`/blog/${blog.slug}`}><img src={blog.image_url} /></Link>
          </div>
          <div className="blog-info">
            <div className="post-title-time">
              <h5><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h5>
              <p>{formatTime(blog.created_at)}</p>
            </div>
            <p>{blog.short_description}</p>
            <Link to={`/blog/${blog.slug}`} className="read-more">Read more</Link>
          </div>
        </article>
      </div>
    )
  }

  renderRecentPost(recentPost) {
    return (
      <div className="col-md-12 col-sm-6 col-xs-12" key={"recent_post_" + recentPost.slug}>
        <article className="recent-post-item">
          <div className="recent-post-image">
            <Link to={`/blog/${recentPost.slug}`}><img src={recentPost.image_url} /></Link>
          </div>
          <div className="recent-post-info">
            <div className="recent-post-title-time">
              <h5><Link to={`/blog/${recentPost.slug}`}>{recentPost.title}</Link></h5>
              <p>{formatTime(recentPost.created_at)}</p>
            </div>
            <p>{recentPost.short_description}</p>
          </div>
        </article>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blog.blogs_page
  };
}

export default connect(mapStateToProps, { getAll })(Blog);
