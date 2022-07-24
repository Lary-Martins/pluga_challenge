import ToolTypes from "./ToolTypes"

type MyContextTypes = {
  tools: ToolTypes[],
  toolsData: ToolTypes[],
  nameTool: string,
  setNameTool: (newState: string) => {},
  setTools: (newState: ToolTypes[]) => {}
};

export default MyContextTypes;