import { useState, useEffect } from "react";
import getTools from "../services/getTools";
import MyProviderTypes from "../types/MyProviderTypes";
import ToolTypes from "../types/ToolTypes";
import MyContext from "./MyContext";

const MyProvider = ({ children }: MyProviderTypes) => {
  const [tools, setTools] = useState<ToolTypes[] | []>([]);

  useEffect(() => {
    async function getData () {
      const result = await getTools();
      setTools(result) 
    }
    getData()
  }, []) 

  return ( 
    <MyContext.Provider value={{ tools }}>
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider; 