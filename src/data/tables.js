import MemSeat from "../seatPictures/2mem-seat.webp";
import MemSeat2 from "../seatPictures/3mem-seat.webp";
import BeachSeat from "../seatPictures/beachside-seat.webp";
import FamilySeat from "../seatPictures/family-seat.webp";
import LuxurySeat from "../seatPictures/luxury-seat.webp";
import PoolSeat from "../seatPictures/poolside-seat.webp";
import SingleSeat from "../seatPictures/single-seat.webp";
import Uyyala from "../seatPictures/uyyala-seat.webp";

export const tables = [
  {
    id: 1,
    type: "Single Seat",
    cost: "20",
    avialable: true,
    pic: SingleSeat,
    rating: 5,
  },
  {
    id: 2,
    type: "Two Members Seat",
    cost: "25",
    avialable: true,
    pic: MemSeat,
    rating: 4,
  },
  {
    id: 3,
    type: "Three Members Seat",
    cost: "30",
    avialable: true,
    pic: MemSeat2,
    rating: 3,
  },
  {
    id: 4,
    type: "Two Members Seat",
    cost: "10",
    avialable: true,
    pic: BeachSeat,
    rating: 4,
  },
  {
    id: 5,
    type: "Pool Side Seat",
    cost: "15",
    avialable: true,
    pic: PoolSeat,
    rating: 5,
  },
  {
    id: 7,
    type: "Luxury Seat",
    cost: "25",
    avialable: true,
    pic: LuxurySeat,
    rating: 4,
  },
  {
    id: 8,
    type: "Family Seat",
    cost: "29",
    avialable: true,
    pic: FamilySeat,
    rating: 3,
  },
  {
    id: 9,
    type: "Three Members Seat",
    cost: "30",
    avialable: true,
    pic: Uyyala,
    rating: 4,
  },
];
