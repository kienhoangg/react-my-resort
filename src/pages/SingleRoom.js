import React, { Component } from "react";
import Banner from "../components/Banner";
import DefaultBcg from "../images/defaultBcg.jpeg";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      DefaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { filterSlug } = this.context;

    const filterRoom = filterSlug(this.state.slug);
    if (!filterRoom) {
      return (
        <div className="error">
          <h3>No room could be found ...</h3>
          <Link to="/" className="btn-primary">
            back to Room
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = filterRoom.fields;

    const [mainImg, ...RemainImg] = images;

    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/" className="btn-primary">
              Back to Room
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {RemainImg.map((img, index) => (
              <img key={index} src={img} alt={name} />
            ))}
          </div>
        </section>
        <section className="single-room-info">
          <div className="desc">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
          <div className="info">
            <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size} SQFT</h6>
            <h6>
              Max Capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
            {breakfast && <h6>Free Breakfast Included</h6>}
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <div className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </div>
        </section>
      </>
    );
  }
}
