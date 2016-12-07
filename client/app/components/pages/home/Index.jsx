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
  componentDidMount() {
    /*************************
      7. Service Carousel
    *************************/
    $('.service-carousel').slick({
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // Tablet
        { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Large Mobile
        { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } }  // Small Mobile
      ]
    });
    /*************************
        8. Agents Carousel
    *************************/
    $('.agents-carousel').slick({
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // Tablet
        { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Large Mobile
        { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } }  // Small Mobile
      ]
    });

    /*************************
        9. Testimonial Carousel
    *************************/
    $('.testimonial-carousel').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    /*************************
        10. Blog Carousel
    *************************/
    $('.blog-carousel').slick({
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Tablet
        { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Large Mobile
        { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } }  // Small Mobile
      ]
    });

    /*************************
        11. Brand Carousel
    *************************/
    $('.brand-carousel').slick({
      arrows: false,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      responsive: [
        { breakpoint: 1169, settings: { slidesToShow: 4, slidesToScroll: 3 } }, // Medium Device
        { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // Tablet
        { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Large Mobile
        { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 } }  // Small Mobile
      ]
    });
  }

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
