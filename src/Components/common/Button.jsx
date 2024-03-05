

const Button = ({ButtonText , buttonAction}) => {
  return (
        <button className="btn" onClick={buttonAction}>
            {ButtonText}
        </button>
    )
}

export default Button