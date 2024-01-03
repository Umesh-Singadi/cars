import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  // const { cars } = useSelector((state) => state.cars);

  const { cars, name } = useSelector(({ form, cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });
  const dispatch = useDispatch();

  const renderCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
