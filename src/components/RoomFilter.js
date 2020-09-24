import React from "react";
import Title from "./Title";
import { useContext } from "react";
import { RoomContext } from "../context";

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    rooms,
    getUnique,
    type,
    handleChange,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast,
  } = context;

  let types = getUnique(rooms, "type");
  let guests = getUnique(rooms, "capacity");

  types = ["all", ...types];
  return (
    <section className="filter-container">
      <Title title="search room" />
      <form className="filter-form">
        {/* Type Filter */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            onChange={handleChange}
            name="type"
            id="type"
            value={type}
            className="form-control"
          >
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/* Guests filter */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            onChange={handleChange}
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
          >
            {guests.map((guest, index) => (
              <option key={index} value={guest}>
                {guest}
              </option>
            ))}
          </select>
        </div>
        {/* Price filter */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            id="price"
            name="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* Size Filter */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* extras filter */}
        {/* extras  */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras  */}
      </form>
    </section>
  );
}
