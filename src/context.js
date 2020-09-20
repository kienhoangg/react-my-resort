import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: items,
    sortedRooms: [],
    featuredRoom: [],
    loading: true,
  };
  componentDidMount() {
    let rooms = this.formatData(this.state.rooms);
    let featuredRoom = rooms.filter((room) => room.fields.featured === true);

    this.setState({
      rooms,
      featuredRoom,
      loading: false,
    });
  }
  formatData = (arrData) => {
    let tempData = arrData.map((room) => {
      let id = room.sys.id;

      let images = room.fields.images.map((image) => image.fields.file.url);
      let fields = { ...room.fields, images };
      let newRoom = {
        id,
        fields,
        images,
      };
      return newRoom;
    });

    return tempData;
  };
  filterSlug = (slug) => {
    let rooms = [...this.state.rooms];
    // let template = [...this.state.rooms];
    let filterRoom = rooms.find((room) => room.fields.slug === slug);
    return filterRoom;
  };
  render() {
    return (
      <RoomContext.Provider
        value={{ ...this.state, filterSlug: this.filterSlug }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomContext, RoomProvider };
