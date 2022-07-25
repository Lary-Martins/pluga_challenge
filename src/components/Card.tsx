import ToolTypes from '../types/ToolTypes';

function Card(tool: ToolTypes) {
  const { name, icon } = tool;

  return (
    <div data-testid="tool-card" className="tool-card">
      <span>{name}</span>
      <img
        src={icon}
        alt={name}
      />
    </div>
  );
}

export default Card;
