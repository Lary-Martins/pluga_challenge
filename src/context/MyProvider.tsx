import { useState, useEffect } from "react";
import getTools from "../services/getTools";
import MyProviderTypes from "../types/MyProviderTypes";
import ToolTypes from "../types/ToolTypes";
import MyContext from "./MyContext";

const MyProvider = ({ children }: MyProviderTypes) => {
  const [nameTool, setNameTool] = useState<string>("");
  const [toolsData, setToolsData] = useState<ToolTypes[] | []>([]);
  const [tools, setTools] = useState<ToolTypes[] | []>([]);

  useEffect(() => {
    async function getData() {
      const result = await getTools();
      setToolsData(result);
    }
    getData();
  }, []);

  useEffect(() => {
    let filteredTools = toolsData;

    if (nameTool.length > 0) {
      filteredTools = filteredTools.filter((tool) =>
        tool.name.toLowerCase().startsWith(nameTool)
      );
    }

    setTools(filteredTools);
  }, [nameTool, toolsData]);

  return (
    <MyContext.Provider
      value={{ nameTool, setNameTool, tools, toolsData, setTools }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
