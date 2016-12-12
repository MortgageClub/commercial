import React, { Component } from 'react';

class Blog extends Component {
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
                  <p>Commercial real estate news, financing tips, investing advice, market trends, and more.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="blog-carousel">
                {/* blog-item */}
                <div className="col-md-12">
                  <article className="blog-item bg-gray">
                    <div className="blog-image">
                      <a href="single-blog.html"><img src="/images/blog/1.jpg" alt=""/></a>
                    </div>
                    <div className="blog-info">
                      <div className="post-title-time">
                        <h5><a href="single-blog.html">Maridland de Villa</a></h5>
                        <p>July 30, 2016 / 10 am</p>
                      </div>
                      <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                      <a className="read-more" href="single-blog.html">Read more</a>
                    </div>
                  </article>
                </div>
                {/* blog-item */}
                <div className="col-md-12">
                  <article className="blog-item bg-gray">
                    <div className="blog-image">
                      <a href="single-blog.html"><img src="/images/blog/2.jpg" alt=""/></a>
                    </div>
                    <div className="blog-info">
                      <div className="post-title-time">
                        <h5><a href="single-blog.html">Latest Design House</a></h5>
                        <p>July 30, 2016 / 10 am</p>
                      </div>
                      <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                      <a className="read-more" href="single-blog.html">Read more</a>
                    </div>
                  </article>
                </div>
                {/* blog-item */}
                <div className="col-md-12">
                  <article className="blog-item bg-gray">
                    <div className="blog-image">
                      <a href="single-blog.html"><img src="/images/blog/3.jpg" alt=""/></a>
                    </div>
                    <div className="blog-info">
                      <div className="post-title-time">
                        <h5><a href="single-blog.html">Duplex Villa House</a></h5>
                        <p>July 30, 2016 / 10 am</p>
                      </div>
                      <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                      <a className="read-more" href="single-blog.html">Read more</a>
                    </div>
                  </article>
                </div>
                {/* blog-item */}
                <div className="col-md-12">
                  <article className="blog-item bg-gray">
                    <div className="blog-image">
                      <a href="single-blog.html"><img src="/images/blog/2.jpg" alt=""/></a>
                    </div>
                    <div className="blog-info">
                      <div className="post-title-time">
                        <h5><a href="single-blog.html">Latest Design House</a></h5>
                        <p>July 30, 2016 / 10 am</p>
                      </div>
                      <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                      <a className="read-more" href="single-blog.html">Read more</a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BLOG AREA END */}
      </div>
    )
  }
}

export default Blog;
