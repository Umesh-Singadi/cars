import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});
export const { addCar, setSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
