import { useContext } from 'react';
import MyContext from '../context/MyContext';

function Pagination() {
  const { setCurrentPage, pages } = useContext(MyContext);

  return (
    <nav>
      {Array.from(Array(pages), (_num, index) => (
        <button
          type="button"
          data-testid="page-button"
          value={index}
          onClick={(e) => { setCurrentPage(+e.currentTarget.value); }}
        >
          {index + 1}
        </button>
      ))}
    </nav>
  );
}

export default Pagination;
