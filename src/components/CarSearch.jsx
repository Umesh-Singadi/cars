import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.cars);
  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="little is-3">My Cars</h3>
      <div className="search field horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          placeholder="Search car..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
