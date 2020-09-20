import React from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { images } = room;
  const { name, slug, price } = room.fields;

  return (
    <section className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single-room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <p className="room-info">{name}</p>
        <Link to={`/rooms/${slug}`} className="room-link btn-primary">
          features
        </Link>
      </div>
    </section>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  fields: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
