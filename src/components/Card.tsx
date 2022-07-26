import ToolTypes from '../types/ToolTypes';

function Card(tool: ToolTypes) {
  const { name, icon } = tool;

  return (
    <div data-testid="tool-card">
      <span data-testid="tool-card-name">
        {name}
      </span>
      <img
        data-testid="tool-card-img"
        src={icon}
        alt={name}
      />
    </div>
  );
}

export default Card;
