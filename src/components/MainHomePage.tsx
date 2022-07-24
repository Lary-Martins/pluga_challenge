import { useContext } from "react";
import Card from "./Card";
import ToolTypes from "../types/ToolTypes";
import MyContext from "../context/MyContext";

const MainHomePage = () => {
  const { tools } = useContext(MyContext)

  return (
    <section>
      {
        tools.map((tool: ToolTypes, _index: number) => (
          <Card {...tool} />
        ))
      }
    </section>
  );
};

export default MainHomePage;
