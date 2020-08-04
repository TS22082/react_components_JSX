import React from "react";
import "./App.css";

import Auth from "./components/Authed";
import NoAuth from "./components/NotAuthed";
import ListItem from "./components/ListItem";

function App() {
  const auth = false;
  const arrayForFun = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      {auth ? <Auth /> : <NoAuth />}
      <ul>
        {arrayForFun.map((num, id) => (
          <ListItem key={id} aProp={num} anotherProp={num * 2} />
        ))}
      </ul>
    </div>
  );
}

export default App;
