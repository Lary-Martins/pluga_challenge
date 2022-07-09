import { useEffect, useState } from "react";
import getTools from "../services/getTools";
import Card from "./Card";
import ToolTypes from "../types/ToolTypes";

const MainHomePage = () => {
  const [tools, setTools] = useState<ToolTypes[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    async function getData () {
      const result = await getTools();
      setTools(result)
    }
    getData()
  }, []) 

  const handleClickPrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  }

  const handleClickNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  }

  return (
    <section>
      { 
        tools.map((tool: ToolTypes, _index: number) => (
          <Card { ...tool } />
        )) 
      }
    <div>
    <button
      type="button"
      data-testid="prev-page"
      disabled={ currentPage === 0 }
      onClick={ handleClickPrevPage }
      > 
      Anterior
    </button>

    <span>{ currentPage }</span>

    <button
      type="button"
      data-testid="next-page"
      onClick={ handleClickNextPage }
    > 
      Próxima
    </button>
    </div>
  </section>
  )
}
export default MainHomePage;