import React, { Component } from 'react';
import { getAll } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class BlogSidebar extends Component {
  componentDidMount() {
    this.props.getAll(4);
  }

  render() {
    const recent_posts = this.props.blogs ? this.props.blogs.slice(0, 4) : [];
    return (
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
            <li><Link activeClassName="active" to={{ pathname: "/market-insights", query: {type: "commercial_real_estate"} }}>Commercial Real Estate</Link></li>
            <li><Link activeClassName="active" to={{ pathname: "/market-insights", query: {type: "financing"} }}>Financing</Link></li>
            <li><Link activeClassName="active" to={{ pathname: "/market-insights", query: {type: "data"} }}>Data</Link></li>
            <li><Link activeClassName="active" to={{ pathname: "/market-insights", query: {type: "technology"} }}>Technology</Link></li>
            <li><Link activeClassName="active" to={{ pathname: "/market-insights", query: {type: "events"} }}>Events</Link></li>
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
      </div>
    )
  }

  renderRecentPost(recentPost) {
    return (
      <div className="col-md-12 col-sm-6 col-xs-12" key={"recent_post_" + recentPost.slug}>
        <article className="recent-post-item">
          <div className="recent-post-image">
            <Link to={`/market-insights/${recentPost.slug}`}><img src={recentPost.image_url} /></Link>
          </div>
          <div className="recent-post-info">
            <div className="recent-post-title-time">
              <h5><Link to={`/market-insights/${recentPost.slug}`}>{recentPost.title}</Link></h5>
              <p>{recentPost.created_at}</p>
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
    blogs: state.blog.recent
  };
}

export default connect(mapStateToProps, {getAll})(BlogSidebar);
// <aside className="widget widget-archive mb-50">
//   <h5>Archive</h5>
//   <ul className="widget-archive-list">
//     <li><a href="#">August <span>2016</span></a></li>
//     <li><a href="#">June <span>2016</span> </a></li>
//     <li><a href="#">May <span>2016</span> </a></li>
//     <li><a href="#">April <span>2016</span> </a></li>
//     <li><a href="#">March <span>2016</span> </a></li>
//   </ul>
// </aside>