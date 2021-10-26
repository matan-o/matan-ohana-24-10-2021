import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useRef, useState } from "react";
import { cityStoreActions } from "../../store/actions/city.actions";
import { store } from "../../store/RootStore";

const SearchCitiesInput: React.FC = () => {
  const isTyping = useRef<boolean>(false);

  const [inputValue, setInputValue] = useState('')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    

    if (inputValue.length < 2) {
      store.dispatch(cityStoreActions.citySearchFinished([]));
    } else if (!isTyping.current) {
      isTyping.current = true;

      if (inputValue && inputValue.length >= 2) {
        store.dispatch(cityStoreActions.citySearchAsync(inputValue));
      }

      setTimeout(() => {
        isTyping.current = false;
      }, 150);
    }
  };

  return (
    <div className="search-unit">
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      <input
        onChange={handleTextChange}
        type="text"
        className="search-input"
        placeholder="Enter city name"
        value={inputValue}
      />
    </div>
  );
};

export default SearchCitiesInput;
