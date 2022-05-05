import './index.css'

const Button = props => {
  const {buttonDetails, setActiveButtonId, isActive} = props
  const {id, imageUrl, buttonText, imageAltText} = buttonDetails

  const activeClassName = isActive ? 'button red-button' : 'button'
  const selectActiveButtonId = () => {
    setActiveButtonId(id)
  }
  return (
    <>
      <li className="buttton-container">
        <button
          type="button"
          className={activeClassName}
          onClick={selectActiveButtonId}
        >
          {buttonText}
        </button>
      </li>
    </>
  )
}

export default Button
