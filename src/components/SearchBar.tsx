import { useState } from "react";

const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState <string>('');

  const handleChangeInput = (value: string) => {
    setSearchTitle(value);
  }

  const handleClick = (value: string) => {
    console.log(value)
  }

  return (
    <header data-testid="tool-search">
      <label>
        Escreve aqui o nome da ferramenta
        <input
          type="text"
          data-testid="tool-search-input"
          name="searchTitle"
          value={ searchTitle }
          onChange={ (e) => handleChangeInput(e.currentTarget.value) } />
      </label>
      <button
        type="button"
        data-testid="tool-search-button"
        onClick={ () => handleClick(searchTitle) }
      >
        Buscar
      </button>
    </header>
  )
}

export default SearchBar;