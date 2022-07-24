import { useState, useEffect } from "react";
import getTools from "../services/getTools";
import MyProviderTypes from "../types/MyProviderTypes";
import ToolTypes from "../types/ToolTypes";
import MyContext from "./MyContext";

const MyProvider = ({ children }: MyProviderTypes) => {
  const [nameTool, setNameTool] = useState<string>("");
  const [toolsData, setToolsData] = useState<ToolTypes[] | []>([]);
  const [tools, setTools] = useState<ToolTypes[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage] = useState<number>(12);
  const [pages, setPages] = useState<number>(0);

  useEffect(() => {
    async function getData() {
      const result = await getTools();
      setToolsData(result);
      setTools(result.slice(13));
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

  useEffect(() => {
    setPages(Math.ceil(toolsData.length / itemsPerPage));

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = toolsData.slice(startIndex, endIndex);
    setTools(currentItems);
  }, [currentPage, setTools, toolsData, itemsPerPage]);

  const context = {
    nameTool,
    setNameTool,
    tools,
    toolsData,
    setTools,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    pages,
  };
  
  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};

export default MyProvider;
