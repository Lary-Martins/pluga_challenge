import ToolTypes from './ToolTypes';

type MyContextTypes = {
  tools: ToolTypes[],
  toolsData: ToolTypes[],
  nameTool: string,
  itemsPerPage: number,
  currentPage: number,
  pages: number,
  setTools: (_newState: ToolTypes[]) => {}
  setNameTool: (_newState: string) => {},
  setCurrentPage: (_newState: number) => {},
};

export default MyContextTypes;
