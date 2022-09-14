import data from "./components/Data";
import List from "./components/List";
import "./index.css";

import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="body">
      <section className="container">
        <h3 className="title">{people.length} birthdays today</h3>
        <List people={people}/>

        <button className="clear-btn" onClick={() => setPeople([])}>Clear All</button>
      </section>
    </div>
  );
}

export default App;
