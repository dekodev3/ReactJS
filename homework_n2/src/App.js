import "./App.css";
import Academy from "./Components/Academy_Component/Academy";
import Cards from "./Components/Card_Component/Card";

function App() {
  const academies = [
    {
      id: '1',
      name: 'Seavus Academy',
      description: 'A leading academy recognized for its cutting-edge programs.',
    },
    {
      id: '2',
      name: 'Harvard Academy',
      description: 'A renowned academy specializing in various disciplines.',
    },
    {
      id: '3',
      name: 'Cambridge Academy',
      description: 'An exceptional academy known for its expertise in science and technology.',
    },
  ];
 
  return (
    <div className="App">
      <h1>Exercise 1: Functional Component</h1>
      <div className="cards-div">
        <Cards
          heading="Card 1"
          description="This is the first card"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/300px-Playing_card_spade_A.svg.png?20070326035149"
        />
        <Cards
          heading="Card 2"
          description="This is the fsecond card"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/300px-Playing_card_spade_2.svg.png"
        />
        <Cards
          heading="Card 3"
          description="This is the third card"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/300px-Playing_card_club_3.svg.png?20071013033857"
        />
        <Cards
          heading="Card 4"
          description="This is the fourth card"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/300px-Playing_card_spade_4.svg.png?20070326035330"
        />
        <Cards
          heading="Card 5"
          description="This is the fifth card"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/300px-Playing_card_spade_5.svg.png?20070326035345"
        />
      </div>
      <hr />
      <hr />
      <div className="academies-div">
      <h1>Exercise 1.5: Functional Component</h1>
        
      <Academy academies={academies} name="Academies rendered with React.JS" />
      </div>
    </div>
  );
}

export default App;
