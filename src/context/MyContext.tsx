import { createContext } from "react";

const initialValue = {
  tools: [
    {
      app_id: "",
      name: "",
      color: "",
      icon: "",
      link: "",
    },
  ]
};

const MyContext = createContext(initialValue);

export default MyContext;
