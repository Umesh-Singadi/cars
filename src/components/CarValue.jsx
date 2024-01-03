import { useSelector } from "react-redux";
function CarValue() {
  const filteredCars = useSelector(({ cars: { cars, searchTerm } }) => {
    return cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const cost = filteredCars.reduce((totalCost, car) => totalCost + car.cost, 0);
  return <div className="car-value">Total Cost ${cost}</div>;
}

export default CarValue;
