import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
export default class Rooms extends Component {
  render() {
    return (
      <Hero heroClass="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Back To Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
