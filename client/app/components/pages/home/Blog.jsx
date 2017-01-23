import React, { Component } from 'react';
import { getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BlogSidebar from './_BlogSiderbar';
import Helmet from 'react-helmet';
import { track } from '../../../utils/MixPanelUtils';

class Blog extends Component {
  componentDidMount() {
    if(this.props.params && this.props.params.type){
      this.props.getAll(8, this.props.params.type);
    } else {
      this.props.getAll(8);
    }
    track("View Blog Page");
  }

  componentWillReceiveProps(newProps) {
    if(newProps.params.type != this.props.params.type) {
      this.props.getAll(8, newProps.params.type);
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet title="Blackline | Commercial real estate loans" 
          meta={[
            {name: "description", content: "Commercial real estate loans"}
          ]} />
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
              <BlogSidebar/>
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
            <Link to={`/market-insights/${blog.slug}`}><img src={blog.image_url} /></Link>
          </div>
          <div className="blog-info">
            <div className="post-title-time">
              <h5><Link to={`/market-insights/${blog.slug}`}>{blog.title}</Link></h5>
              <p>{blog.created_at}</p>
            </div>
            <p>{blog.short_description}</p>
            <Link to={`/market-insights/${blog.slug}`} className="read-more">Read more</Link>
          </div>
        </article>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blogs: state.blog.blogs_page,
    params: ownProps.location.query
  };
}

export default connect(mapStateToProps, { getAll })(Blog);
