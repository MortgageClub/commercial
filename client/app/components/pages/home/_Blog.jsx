import React, { Component } from 'react';
import { getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { formatDate, formatTime } from '../../../utils/FormatUtils';

class Blog extends Component {
  componentDidMount() {
    this.props.getAll(3);

    // $('.blog-carousel').slick({
    //   arrows: false,
    //   dots: false,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 3,
    //   slidesToScroll: 2,
    //   responsive: [
    //     { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Tablet
    //     { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Large Mobile
    //     { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } }  // Small Mobile
    //   ]
    // });
  }
  render() {
    return (
      <div>
        {/* BLOG AREA START */}
        <div className="blog-area pb-60">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center">
                  <h2>FROM BLOG</h2>
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
      <div className="col-md-4" key={"homepage_" + blog.id}>
        <article className="blog-item bg-gray">
          <div className="blog-image">
            <a><img src={blog.image_url} alt=""/></a>
          </div>
          <div className="blog-info">
            <div className="post-title-time">
              <h5><a>{blog.title}</a></h5>
              <p>{formatTime(blog.created_at)}</p>
            </div>
            <p>{blog.short_description}</p>
            <a className="read-more">Read more</a>
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