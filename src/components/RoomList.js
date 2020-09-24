import React from "react";
import Room from "./Room";
import { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
export default function RoomList() {
  const context = useContext(RoomContext);

  const { sortedRooms, loading } = context;
  const rooms = sortedRooms.map((item) => <Room room={item} key={item.id} />);
  return (
    <section className="roomslist">
      <div className="roomslist-center">{loading ? <Loading /> : rooms}</div>
    </section>
  );
}
