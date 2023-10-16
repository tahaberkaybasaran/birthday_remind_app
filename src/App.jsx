import { useState } from "react";
import List from "./components/List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthday People</h2>
        <List people={people} />
        <div>
          <button className="btn btn-block">Clear All</button>
        </div>
      </section>
    </main>
  );
};
export default App;
