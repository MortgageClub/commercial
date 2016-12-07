import React, { Component } from 'react';
import Subscribe from '../../shared/Subscribe';
import Slider from './Slider';
import HowItWorks from './HowItWorks';
import About from './About';
import Brand from './Brand';
import BookHomeHouse from './BookHomeHouse';
import Blog from './Blog';
import Agents from './Agents';
import Clients from './Clients';

class Index extends Component {
  render() {
    return (
      <div>
        <Slider/>
        {/* Start page content */}
        <section id="page-content" className="page-wrapper">
          <HowItWorks/>
          <About/>
          <BookHomeHouse/>
          <Agents/>
          <Clients/>
          <Blog/>
          <Brand/>
          <Subscribe />
        </section>
        {/* End page content */}
      </div>
    )
  }
}

export default Index;
