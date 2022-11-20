import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {

  const costs = [
    {
      date: new Date(2022, 2, 12),
      description: 'Холодильник',
      amount: 450,
    },
    {
      date: new Date(2022, 5, 25),
      description: 'Ноутбук',
      amount: 111450,
    },
    {
      date: new Date(2022, 10, 15),
      description: 'Пиджак',
      amount: 3999,
    },
  ]

  return (
    <div>
      <h1>Учет расходов</h1>
      <NewCost></NewCost>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
