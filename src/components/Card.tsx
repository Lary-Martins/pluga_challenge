import ToolTypes from "../types/ToolTypes"

const Card = (props: ToolTypes) => {
  return (
    <div>
      <span>{props.name}</span>
      <img
          src={ props.icon }
          alt={ props.name }
      />
    </div>
  )
}

export default Card;