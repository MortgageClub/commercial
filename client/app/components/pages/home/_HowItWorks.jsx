import React, { Component } from 'react';

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Shop"
    }
  }

  componentDidMount() {
    sr.reveal('.how-it-works-title');
    sr.reveal('.how-it-works-content');
  }

  render() {
    let imageUrl = "";
    let content = "";

    switch(this.state.active){
      case "Shop":
        imageUrl = "/images/how/1.jpg";
        content = "Get at least 3 competitive quotes for your scenario.";
        break;
      case "Apply":
        imageUrl = "/images/how/2.jpg";
        content = "We structure and present your package to our lending sources.";
        break;
      case "Underwrite":
        imageUrl = "/images/how/3.jpg";
        content = "Final underwriting and lender commitment.";
        break;
      case "Closing":
        imageUrl = "/images/how/4.jpg";
        content = "Loan closes and funding is completed.";
        break;
    }

    return (
      <div>
        <div className="services-area pb-60">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title-2 text-center how-it-works-title">
                  <h2>HOW IT WORKS</h2>
                  <p>Access a diverse array of loan products and terms, transparent application and underwriting processes, quick funding timelines, and a first-class client experience.</p>
                </div>
              </div>
            </div>
            <div className="row how-it-works-content">
              <div className="col-md-5 col-xs-12">
                <div className="btn-group">
                  <button type="button" className={this.state.active == "Shop" ? "active" : ""} onClick={this.setActive.bind(this)}>Shop</button>
                  <button type="button" className={this.state.active == "Apply" ? "active" : ""} onClick={this.setActive.bind(this)}>Apply</button>
                  <button type="button" className={this.state.active == "Underwrite" ? "active" : ""} onClick={this.setActive.bind(this)}>Underwrite</button>
                  <button type="button" className={this.state.active == "Closing" ? "active" : ""} onClick={this.setActive.bind(this)}>Closing</button>
                </div>
                <p>{content}</p>
              </div>
              <div className="col-md-7 col-xs-12">
                <img src={imageUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  setActive(event) {
    this.setState({
      active: $(event.target).text()
    });
  }
}

export default HowItWorks;
