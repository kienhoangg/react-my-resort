import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";
export default class RoomFeatured extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRoom: featuredRooms } = this.context;
    let rooms = featuredRooms.map((room) => <Room key={room.id} room={room} />);

    return (
      <section className="featured-rooms">
        <Title title="featured Room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
