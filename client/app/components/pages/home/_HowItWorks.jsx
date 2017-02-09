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
    $(".image-slideshow img").hide();
    $(".image-slideshow img:nth(0)").show();
  }

  componentDidUpdate() {
    $(".image-slideshow img").hide();
    switch(this.state.active){
      case "Shop":
        $(".image-slideshow img:nth(0)").show();
        break;
      case "Apply":
        $(".image-slideshow img:nth(1)").show();
        break;
      case "Underwrite":
        $(".image-slideshow img:nth(2)").show();
        break;
      case "Closing":
        $(".image-slideshow img:nth(3)").show();
        break;
    }
  }

  render() {
    let content = "";

    switch(this.state.active){
      case "Shop":
        content = "Our pricing engine quickly turns around 3 competitive soft quotes for your specific scenario from our lending sources.";
        break;
      case "Apply":
        content = "You complete loan request form and provide necessary documentation. We assemble and submit your loan package to our funding source.";
        break;
      case "Underwrite":
        content = "We order appraisal and other 3rd party reports. Get status updates from your Client Dashboard as we underwrite your loan.";
        break;
      case "Closing":
        content = "Loan closes and funding is completed. By replacing complex processes with powerful software, we ensure a fast and smooth closing.";
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
                <p className="mt-30">{content}</p>
              </div>
              <div className="col-md-7 col-xs-12 image-slideshow">
                <img src="/images/how/1.jpg" />
                <img src="/images/how/2.jpg" />
                <img src="/images/how/3.jpg" />
                <img src="/images/how/4.jpg" />
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
