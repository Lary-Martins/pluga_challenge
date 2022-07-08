import ToolTypes from "../types/ToolTypes";

const getTools = async (): Promise <ToolTypes[] | []> => {
  const result = await fetch('https://pluga.co/ferramentas_search.json')
    .then((response) => response.json())
    .catch((reject) => console.log(reject));

  return result;
}

export default getTools;