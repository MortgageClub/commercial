import React, { Component } from 'react';
import { fetch } from '../../../actions/BlogAction';
import { connect } from 'react-redux';
import { formatDate, formatTime } from '../../../utils/FormatUtils';

class BlogDetails extends Component {
  componentDidMount() {
    if (this.props.params.id) {
      this.props.fetch(this.props.params.id);
    }
  }
  render() {
    return (
      <div className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
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
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-details-author-post clearfix line-bottom pb-30 mb-115">
                      <div className="blog-details-author-image">
                        <a href="agent-details.html"><img src="https://ca.slack-edge.com/T041L28A7-U041L2M1H-f402f0e0f79b-1024" alt=""/></a>
                      </div>
                      <div className="blog-details-author-desc">
                        <div className="blog-details-author-name">
                          <h6><a>Billy Tran</a></h6>
                          <p className="">Author</p>
                        </div>
                        <p>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                      </div>
                    </div>
                  </div>
                :
                  null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog_details: state.blog.details,
    params: ownProps.params
  };
}

export default connect(mapStateToProps, { fetch })(BlogDetails);
