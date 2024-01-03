import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
import { carsReducer, addCar, changeTerm, removeCar } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store };
export { changeCost, changeName };
export { addCar, changeTerm, removeCar };
