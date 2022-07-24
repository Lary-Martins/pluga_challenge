import { createContext } from "react";
import ToolTypes from "../types/ToolTypes";

const initialValue = {
  tools: [
    {
      app_id: "",
      name: "",
      color: "",
      icon: "",
      link: "",
    },
  ],
  toolsData: [
    {
      app_id: "",
      name: "",
      color: "",
      icon: "",
      link: "",
    },
  ],
  nameTool: "",
  setNameTool: (_newState: string) => {},
  setTools: (_newState: ToolTypes[]) => {},
};

const MyContext = createContext(initialValue);

export default MyContext;
