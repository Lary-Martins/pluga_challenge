import ToolTypes from "../types/ToolTypes"

const Card = (tool: ToolTypes) => {
  return (
    <div>
      <span>{tool.name}</span>
      <img
          src={ tool.icon }
          alt={ tool.name }
      />
    </div>
  )
}

export default Card;