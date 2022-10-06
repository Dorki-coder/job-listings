import { useState } from "react";
import "./App.css";
import List from "./Components/List";
import Search from "./Components/Search";

function App() {
  const [tags, setTags] = useState([]);
  return (
    <div className="App">
      <header>
        <div className="container">
          {tags.length > 0 ? <Search tags={tags} setTags={setTags} /> : null}
        </div>
      </header>
      <div className="container">
        <List tags={tags} setTags={setTags} />
      </div>
    </div>
  );
}

export default App;
