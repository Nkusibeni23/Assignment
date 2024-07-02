import { useState } from "react";
import TopBar from "./components/TopBar/Index";
import SearchBox from "./components/SearchBox/Index";
import Main from "./components/Main/Index";

import "./App.css";

// Define ContentType interface
interface ContentType {
  phonetics: string[];
  word: string;
  phonetic: string;
  meanings: any[]; // Adjust 'any[]' to match your actual data structure
}

function App() {
  const [idle, setIdle] = useState(true);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState<ContentType | null>(null); // Use ContentType here

  const searchHandler = async (searchedWord: string) => {
    setSearching(true);
    setIdle(false);

    const searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    const response = await fetch(searchUrl);
    const jsonResponse = await response.json();
    setSearching(false);

    console.log("Test", jsonResponse);

    if (jsonResponse.title === "No Definitions Found") {
      setNotFound(true);
    } else {
      setNotFound(false);
      setContent(jsonResponse[0] as ContentType); // Cast jsonResponse to ContentType
    }
  };

  const reset = () => {
    setIdle(true);
    setSearching(false);
    setNotFound(false);
    setContent(null);
  };

  return (
    <div className="container">
      <TopBar />
      <SearchBox onSearch={searchHandler} onTyping={reset} />
      <Main
        idle={idle}
        searching={searching}
        notFound={notFound}
        content={content}
      />
    </div>
  );
}

export default App;
