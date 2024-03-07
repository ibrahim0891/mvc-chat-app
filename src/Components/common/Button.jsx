

export const Button = ({buttonText , buttonAction}) => {
  return (
        <button className="btn" onClick={buttonAction}>
            {buttonText}
        </button>
    )
}
 