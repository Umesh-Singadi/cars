import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const { name, cost } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  function handleNameChange(event) {
    dispatch(changeName(event.target.value));
  }
  function handleCostChange(event) {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form className="field-group" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name: </label>
          <input
            type="text"
            className="input is-expanded"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="field">
          <label>Cost: </label>
          <input
            type="number"
            className="input is-expanded"
            value={cost || ""}
            onChange={handleCostChange}
          />
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
