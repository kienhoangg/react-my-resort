import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import RoomFeatured from "../components/RoomFeatured";
const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Luxuries Rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Go to Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <RoomFeatured />
    </>
  );
};

export default Home;
