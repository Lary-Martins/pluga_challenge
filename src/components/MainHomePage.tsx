import { useContext } from 'react';
import Card from './Card';
import ToolTypes from '../types/ToolTypes';
import MyContext from '../context/MyContext';

function MainHomePage() {
  const { tools } = useContext(MyContext);

  return (
    <section>
      {
        tools.map((tool: ToolTypes) => (
          <Card {...tool} />
        ))
        }
    </section>
  );
}

export default MainHomePage;
