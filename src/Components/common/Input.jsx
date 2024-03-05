

const Input = ({handleInput , type, placeholder , isRequired = false}) => {
  return ( 
    <input onChange={handleInput} type={type}  placeholder={placeholder} required={isRequired}/>
  )
}

export default Input 