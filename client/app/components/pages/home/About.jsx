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
          <img src="/images/about_us.jpg" width="100%"/>
        </div>
        <div className="page-wrapper">
          <div className="about-sheltek-area pt-90 pb-50">
            <div className="container">
              <div className="text-center about-header">
                Streamlining commercial mortgages with data and technology
              </div>
              <div className="col-md-8 col-md-offset-2 about-content">
                <p>
                  Intelligent financing enables commercial real estate investors to build wealth and strengthen their investments. To secure advantageous loan terms, you need a team that understands the nuances of financial language and trends of capital markets.
                </p>
                <p>
                  Investors deserve the best speed, rates, and service from their lender. And if you’re “in the black,” you’re profitable. Blackline Lending aims to be the financing partner of choice for profitable commercial real estate investments.
                </p>
                <p>
                  Working with Blackline, you can access a nationwide platform and dedicated team of commercial real estate financing experts.
                </p>
                <p>
                  The commercial mortgage industry is slow, obscure, and low-tech. Blackline Lending was started to help real estate investors get financing for commercial properties in a more efficient, transparent, and empowered way. 
                </p>
                <p>
                  Bringing technology to automate these processes, Blackline both saves time and addresses your specific needs. With the time traditionally spent on waiting for a loan, you can focus on finding the next big deal.
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
        <div className="our-team mt-60">
          <div className="about-sheltek-area ptb-90">
            <div className="container text-center">
              <div className="col-md-8 col-md-offset-2">
                <h1>Our Team</h1>
                <p>We have assembled a team from top finance and technology companies such as Franklin Templeton, Nomura, Barrington Capital, Flexport, Misfit, Tech in Asia. If you are interested in opportunities to work with Blackline please send your information to <b><a href="mailto:work@blacklinelending.com">work@blacklinelending.com</a></b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About

