import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Холодильник',
    amount: 450,
  },
  {
    id: 'c2',
    date: new Date(2022, 5, 25),
    description: 'Ноутбук',
    amount: 111450,
  },
  {
    id: 'c3',
    date: new Date(2022, 10, 15),
    description: 'Пиджак',
    amount: 3999,
  },
]

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <h1>Учет расходов</h1>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;