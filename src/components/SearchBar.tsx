import { useContext } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const { nameTool, setNameTool } = useContext(MyContext);

  return (
    <nav data-testid="tool-search">
      <input
        type="text"
        data-testid="tool-search-input"
        name="nameTool"
        value={nameTool}
        placeholder="Digita o nome da ferramenta aqui"
        onChange={(e) => setNameTool(e.currentTarget.value)}
      />
    </nav>
  );
}

export default SearchBar;
