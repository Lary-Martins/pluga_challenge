import { useContext } from "react";
import Card from "./Card";
import ToolTypes from "../types/ToolTypes";
import MyContext from "../context/MyContext";
import Pagination from "./Pagination";

const MainHomePage = () => {
  const { tools } = useContext(MyContext)

  return (
    <section>
      <Pagination />
      {
        tools.map((tool: ToolTypes, _index: number) => (
          <Card {...tool} />
        ))
      }
    </section>
  );
};

export default MainHomePage;
