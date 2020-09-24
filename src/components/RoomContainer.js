/*đây là cách higher-order components */
import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
function RoomContainer(props) {
  const { loading, rooms, sortedRooms } = props.context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter room={rooms} />
      <RoomList room={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(RoomContainer);

/*đây là cách Consumer */
// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         console.log(value);
//         return (
//           <>
//             <RoomFilter />
//             <RoomList />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
