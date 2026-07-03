import { useState } from "react"


const BankBalance = () => {

    const [bank,setBank]=useState(1000)
    const decBank = () =>{
        setBank(bank+500)
    }
    const withBank = () =>{
        setBank(bank-500)
    }
  return (
    <>
    <div>
      <p className=" text-blue-700 text-center">Bank Balance</p>
      <p className="text-9xl text-center text-blue-700">{bank}</p>
    <div className="flex justify-center gap-10 mt-15">
      <button className="bg-blue-600 text-white p-3 mt-15 rounded-lg w-34" onClick={decBank}>Deposit</button>
      <button className="bg-blue-600 text-white p-3 mt-15 rounded-lg w-34" onClick={withBank}>Withdraw</button>
    </div>
    </div>
      
    </>
  )
}

export default BankBalance
