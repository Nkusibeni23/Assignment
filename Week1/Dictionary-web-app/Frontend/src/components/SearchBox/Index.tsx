import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

import "./SearchBox.css";

interface SearchBoxProps {
  onSearch: (searchedWord: string) => void;
  onTyping: (value: string) => void;
}

const Index: React.FC<SearchBoxProps> = ({ onSearch, onTyping }) => {
  const [submitted, setSubmitted] = useState(false);
  const [searchedWord, setSearchedWord] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchedWord === "") {
      setSubmitted(true);
      return;
    }

    if (inputRef.current) {
      onSearch(searchedWord);
    }
  };

  const handleSearch = (value: string) => {
    setSearchedWord(value);
    onTyping(value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      className={`search-box ${submitted ? "submitted" : ""}`}
      onSubmit={submitHandler}
    >
      <input
        ref={inputRef}
        placeholder="Search for any word"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        type="text"
        className={`search-box__input ${!searchedWord ? "invalid" : ""}`}
      />
      {submitted && searchedWord === "" && (
        <span className="error-message">Whoops, can't be empty</span>
      )}
      <button type="submit" className="btn-search">
        <img src={SearchIcon} />
      </button>
    </form>
  );
};

export default Index;
