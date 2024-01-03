import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  // const { cars } = useSelector((state) => state.cars);

  const cars = useSelector(({ cars: { cars, searchTerm } }) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const dispatch = useDispatch();

  const renderCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => dispatch(removeCar(car.id))}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div className="car-list">{renderCars}</div>;
}

export default CarList;
