import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import { useSelector } from "react-redux";
function App() {
  const { name, cost } = useSelector((state) => state.form);
  return (
    <>
      <CarForm></CarForm>
      <CarList></CarList>
      <CarSearch></CarSearch>
      <CarValue></CarValue>
      <h1>{name}</h1>
      <h1>{cost}</h1>
    </>
  );
}

export default App;
