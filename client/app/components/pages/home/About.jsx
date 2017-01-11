import React, { Component } from 'react';
import { track } from '../../../utils/MixPanelUtils';

class About extends Component {
  componentDidMount() {
    track("View About Page");
  }

  render() {
    return (
      <div className="about-page">
        <div className="image-top">
          <img src="/images/about_us.png" width="100%"/>
        </div>
        <div className="page-wrapper">
          <div className="about-sheltek-area pt-90 pb-50">
            <div className="container">
              <div className="text-center about-header">
                The commercial mortgage industry is broken. We’re here to fix it.
              </div>
              <div className="col-md-8 col-md-offset-2 about-content">
                <p>
                  Every year, millions of people waste billions of dollars and countless hours trying to get a basic home loan. Even worse, many are often left to make decisions without a clear understanding of their options. That’s not right.
                </p>
                <br/>
                <p>
                  We think people deserve more from their lender. <b>We started Blackline Lending to help thousands of real estate investors obtain financing for their commercial properties in a more efficient, transparent and empowered way</b>. By bringing technology to everything we do, we will not only save borrowers time and money, but also better address their individual needs and questions. Combine that with great design and customer service, and the mortgage process begins to feel very different. It frees our investors from the loan craziness to focus on what they do best - find the next killer deal!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <h3>
            “Ninety percent of all millionaires become so through owning real estate. More money has been made in real estate than in all industrial investments combined. The wise young man or wage earner of today invests his money in real estate.” -- Andrew Carnegie
          </h3>
        </div>
        <div className="our-team mt-30">
          <div className="about-sheltek-area ptb-90">
            <div className="container text-center">
              <div className="col-md-8 col-md-offset-2">
                <h1>Our Team</h1>
                <p>We have assembled a team from top finance and technology companies such as Franklin Templeton, Nomura, Barrington Capital, LendingHome, Misfit, Tech in Asia. If you are interested in opportunities to work with Blackline Lending please send your information to <b><a href="mailto:work@blacklinelending.com">work@blacklinelending.com</a></b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About

