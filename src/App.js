import React from "react";
import "./App.css";

import Auth from "./components/Authed";
import NoAuth from "./components/NotAuthed";
import ListItem from "./components/ListItem";
import UnorderedList from "./components/UnorderedList";

function App() {
  const auth = false;
  const arrayForFun = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      {auth ? <Auth /> : <NoAuth />}

      <UnorderedList>
        {arrayForFun.map((num, id) => (
          <ListItem key={id}>{num}</ListItem>
        ))}
      </UnorderedList>
    </div>
  );
}

export default App;
