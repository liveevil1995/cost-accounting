import CostItem from "./components/CostItem";

function App() {

  const costDate = new Date(2021, 2, 12);
  const costDescription = 'Холодильник';
  const costAmount = 250;

  return (
    <div>
      <h1>Учет расходов</h1>
      <CostItem></CostItem>
    </div>
  );
}

export default App;
