import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/slices/formSlice";
function CarForm() {
  const { name } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  function handleNameChange(event) {
    dispatch(changeName(event.target.value));
  }

  const handleSubmit = (e) => e.preventDefault();

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
      </form>
    </div>
  );
}

export default CarForm;
