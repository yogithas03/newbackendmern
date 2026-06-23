import Button from "./components/Button"
import Exhance from "./components/Exhance"
import withButton from "./hoc/withButton"

const ButtonEnhance = withButton(Button)
const App = () => {
  const clickButton = ()=>{
    alert("showme")
  }
  const clickButtttton =()=>{
    alert("title")
  }
  return (
    <>
    <div className="flex gap-10 mt-20 mx-5">
    <ButtonEnhance title="hello" onclick={clickButtttton}/>
    <Button showme="hi did you touch button" onclick={clickButton}/>
      </div>
      <Exhance/>
    </>
  )
}

export default App
