import useCounter from "../hooks/useCounter"


const Counter = () => {

    const {counter,handleIncrease,handleDecrease,handleReset}=useCounter()
  return (
    <div>

        <div>
            <p>{counter}</p>
        </div>
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
      
    </div>
  )
}

export default Counter
