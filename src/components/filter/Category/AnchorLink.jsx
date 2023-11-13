
const AnchorLink = ({ name, id, items, task }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${id}`}
          onClick={() => task(items)} />
        <label className="form-check-label" htmlhtmlFor={`${name}-${id}`}>
          {items}
        </label>
      </div>
    </div>
  )
}

export default AnchorLink

