import { useEffect, useState } from "react";
import getTools from "../services/getTools";
import Card from "./Card";
import ToolTypes from "../types/ToolTypes";

const MainHomePage = () => {
  const [tools, setTools] = useState<ToolTypes[] | []>([]);

  useEffect(() => {
    async function getData () {
      const result = await getTools();
      setTools(result) 
    }
    getData()
  }, []) 

  return (
    <section>
      { 
        tools.map((tool: ToolTypes, index: number) => (
          <Card { ...tool } />
        )) 
      }
    </section>
  )
}
export default MainHomePage;