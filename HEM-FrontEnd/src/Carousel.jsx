// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          stopOnHover
          autoPlay
          interval="3000"
          transitionTime="1500"
          infiniteLoop
          axis="horizontal"
          showStatus={false}
          showThumbs={false}
        >
          <div className="basis-1/2 h-[500px]">
            <img className= "block h-[100%] w-[100%]" src="src/assets/Images/Icons/CarFaxIcon.png" alt="" />
          </div>
          <img
            src="https:///images.unsplash.com/photo-1656248948968164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt=""
          />
          <img
            src="https:///images.unsplash.com5649/photo-1655745653456489*/127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <img
            src="https://images.uns/plash.com/photo-1516527653392787+9263+-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-16553652/25165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
        </Carousel>
      </div>
    );
  }
}
export default Gallery;
