import "./Button.css"

const Button = ({text, link}) => {
  return (

  <a className="link-button" href={link}>{text}</a>

  )
}

export default Button