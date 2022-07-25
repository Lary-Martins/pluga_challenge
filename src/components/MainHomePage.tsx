import { useContext } from 'react';
import Card from './Card';
import ToolTypes from '../types/ToolTypes';
import MyContext from '../context/MyContext';
import Pagination from './Pagination';

function MainHomePage() {
  const { tools } = useContext(MyContext);

  return (
    <section>
      <Pagination />
      {
        tools.map((tool: ToolTypes) => (
          <Card {...tool} />
        ))
      }
    </section>
  );
}

export default MainHomePage;
