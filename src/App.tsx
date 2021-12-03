import React, { useState, ChangeEvent } from "react";
import "./App.css";
import Home from "./Containers/Home";
import Search from "./components/Search";
import { PageContainer } from "./components/styles";

function App() {
  const [query, setQuery] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <PageContainer>
        <Search handleChange={handleChange} />
        <Home query={query} />
      </PageContainer>
    </div>
  );
}

export default App;
