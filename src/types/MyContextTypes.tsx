import ToolTypes from "./ToolTypes"

type MyContextTypes = {
  tools: ToolTypes[],
  toolsData: ToolTypes[],
  nameTool: string,
  itemsPerPage: number,
  currentPage: number,
  pages: number,
  setTools: (newState: ToolTypes[]) => {}
  setNameTool: (newState: string) => {},
  setCurrentPage: (_newState: number) => {},
};

export default MyContextTypes;