import ToolTypes from "../types/ToolTypes"

const Card = (tool: ToolTypes) => {
  return (
    <div data-testid="tool-card" className="tool-card">
      <span>{tool.name}</span>
      <img
          src={ tool.icon }
          alt={ tool.name }
      />
    </div>
  )
}

export default Card;