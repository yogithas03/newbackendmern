

const Button = ({title,onclick,showme}) => {
  
  


  return (
    <>
    <button onClick={onclick} className="bg-green-900 text-white text-center rounded-lg p-3">{title}{showme}</button>
      
    </>
  )
}

export default Button
