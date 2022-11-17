import CostItem from "./components/CostItem";

function App() {

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
      description: 'Ноутбук',
      amount: 111450,
    },
  ]

  return (
    <div>
      <h1>Учет расходов</h1>
      <CostItem 
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem 
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem 
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
