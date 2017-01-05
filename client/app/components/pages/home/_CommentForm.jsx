import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { create } from '../../../actions/CommentAction';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class CommentForm extends Component { 
  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className="blog-details-reply leave-review">
        <h5>Leave a Comment</h5>
        <form
          onSubmit={handleSubmit(this.submit.bind(this))}>
          <div className="row">
            <div className="col-md-6">
              <Field
              name="email"
              type="email"
              component="input"
              placeholder="Email"
              required />
            </div>
            
            <div className="col-md-6">
              <Field
                name="name"
                type="text"
                component="input"
                placeholder="Your name"
                required />
            </div>
          </div>

          <Field
              name="content"
              component="textarea"
              placeholder="Write here"
              required />
          <button className="submit-btn-1" type="submit" disabled={pristine || submitting}>Submit Comment</button>
        </form>
      </div>
    )
  }

  submit(commentInfo) {
    this.props.create({...commentInfo, blog_id: this.props.params.id});
  }
}

function mapStateToProps(state, ownProps) {
  return {
    params: ownProps.params
  }
}

export default connect(mapStateToProps, { create })(
  reduxForm({
    form: 'commentForm'
  })(CommentForm)
)

