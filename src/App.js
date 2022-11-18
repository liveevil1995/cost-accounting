import Costs from "./components/Costs";

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
      description: 'Пиджак',
      amount: 3999,
    },
  ]

  return (
    <div>
      <h1>Учет расходов</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
