import React, { Component } from "react";
import Fade from "react-reveal";
import '../../src/css/customStyles.css'

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;
      let projectUrl = projects.url

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projectUrl} className="test" style={{ textAlign: "center" }}>
            <img className='portfolio-img' alt={projects.title} src={projectImage} />
            {projects.title}</a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="10px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Work...</h1>
            
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
              <button className="port-btn"> See My Complete Portfolio</button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
