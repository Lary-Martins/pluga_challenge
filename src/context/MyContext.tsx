/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';
import ToolTypes from '../types/ToolTypes';

const initialValue = {
  tools: [
    {
      app_id: '',
      name: '',
      color: '',
      icon: '',
      link: '',
    },
  ],
  toolsData: [
    {
      app_id: '',
      name: '',
      color: '',
      icon: '',
      link: '',
    },
  ],
  nameTool: '',
  itemsPerPage: 0,
  currentPage: 0,
  pages: 0,
  setCurrentPage: (newState: number) => {},
  setNameTool: (newState: string) => {},
  setTools: (newState: ToolTypes[]) => {},
};

const MyContext = createContext(initialValue);

export default MyContext;
