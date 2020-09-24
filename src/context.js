import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: items,
    sortedRooms: [],
    featuredRoom: [],
    loading: true,
    type: "all",
    capacity: "1",
    minPrice: 0,
    price: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false,
  };
  componentDidMount() {
    let rooms = this.formatData(this.state.rooms);
    let featuredRoom = rooms.filter((room) => room.fields.featured === true);
    const maxRoom = rooms.reduce(function (prev, current) {
      return prev.y > current.y ? prev : current;
    });

    this.setState({
      rooms,
      featuredRoom,
      loading: false,
      sortedRooms: rooms,
      maxPrice: maxRoom.fields.price,
      price: maxRoom.fields.price,
      maxSize: maxRoom.fields.size,
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
  getUnique = (items, value) => {
    return [...new Set(items.map((item) => item.fields[value]))];
  };
  handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [event.target.name]: value,
      },
      this.filterType
    );
  };
  filterType = () => {
    const {
      type,
      capacity,
      price,
      maxSize,
      minSize,
      breakfast,
      pets,
    } = this.state;

    let tempRoom = [...this.state.rooms];
    if (type !== "all") {
      tempRoom = tempRoom.filter((item) => item.fields.type === type);
    }
    if (capacity !== "1") {
      tempRoom = tempRoom.filter(
        (item) => item.fields.capacity.toString() === capacity
      );
    }

    tempRoom = tempRoom.filter((item) => item.fields.price <= parseInt(price));

    tempRoom = tempRoom.filter(
      (item) =>
        parseInt(minSize) <= item.fields.size &&
        item.fields.size <= parseInt(maxSize)
    );
    if (breakfast) {
      tempRoom = tempRoom.filter((item) => item.fields.breakfast);
    }
    if (pets) {
      tempRoom = tempRoom.filter((item) => item.fields.pets);
    }

    this.setState({
      sortedRooms: tempRoom,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          filterSlug: this.filterSlug,
          getUnique: this.getUnique,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component context={value} {...props} />}
      </RoomConsumer>
    );
  };
}
export { RoomContext, RoomProvider, RoomConsumer };
