import React, { Component } from 'react';
import { getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Blog extends Component {
  componentDidMount() {
    this.props.getAll(3);
    sr.reveal('.blog-section-title');
  }

  render() {
    return (
      <div>
        {/* BLOG AREA START */}
        <div className="blog-area pb-60 pt-115">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center blog-section-title">
                  <h2>FROM OUR BLOG</h2>
                  <p>Commercial real estate news, financing tips, industry insights, market trends, and more.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="blog-carousel">
                {
                  this.props.blogs && this.props.blogs.map(blog => this.renderBlog(blog))
                }
              </div>
            </div>
          </div>
        </div>
        {/* BLOG AREA END */}
      </div>
    )
  }

  renderBlog(blog) {
    return (
      <div className="col-md-4" key={"homepage_" + blog.slug}>
        <article className="blog-item bg-gray">
          <div className="blog-image">
            <Link to={`/blog/${blog.slug}`}>
              <img src={blog.image_url}/>
            </Link>
          </div>
          <div className="blog-info">
            <div className="post-title-time">
              <h5><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h5>
              <p>{blog.created_at}</p>
            </div>
            <p>{blog.short_description}</p>
            <Link to={`/blog/${blog.slug}`} className="read-more">Read more</Link>
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